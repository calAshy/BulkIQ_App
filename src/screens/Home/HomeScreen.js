import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { fetchUsername } from "../../Firebase/userService.js";
import { formattedDate } from "../../utils/CurrentDate.js";
import { BackgroundLinearGradient } from "../../utils/BackgroundLinearGradient.js";
import ScreenLayout from "../../components/ScreenLayout.js";

import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore();
const auth = getAuth();

const formatDuration = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs}s`;
};

export default function HomeScreen() {
  const [username, setUsername] = useState("");
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;
    //Retrieve and display username code
    const getUsername = async () => {
      const name = await fetchUsername();
      if (name) setUsername(name);
    };

    const q = query(
      collection(db, "workouts"),
      where("userId", "==", user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetched = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setWorkouts(fetched.reverse());
    });

    getUsername();
    return () => unsubscribe();
  }, []);

  return (
    <BackgroundLinearGradient>
      <ScreenLayout>
        <View style={styles.IntroductionContainer}>
          <View style={styles.WelcomeAndDateText}>
            <Text style={styles.WelcomeText}>Welcome, {username}!</Text>
            <Text style={styles.DateText}>{formattedDate}</Text>
          </View>
        </View>
        {/* Header Row */}
        <ScrollView style={styles.ContentView}>
          <View style={styles.ContentHeaderRow}>
            <Text style={styles.ContentHeaderTitle}>Workout Diary</Text>
          </View>
          {/* Notification Placeholder */}
          <View style={styles.NotificationContainer}>
            <Text style={styles.NotificationText}>
              🔔 Notifications go here
            </Text>
          </View>
          {/* Recent Workouts */}
          <Text style={styles.SectionTitle}>Recent Workouts</Text>
          {workouts.length === 0 ? (
            <Text style={styles.EmptyText}>No workouts yet. Start one!</Text>
          ) : (
            workouts.map((workout) => (
              <View key={workout.id} style={styles.card}>
                <Text style={styles.cardTitle}>{workout.name}</Text>
                <Text style={styles.cardText}>
                  Exercises: {workout.exercises.length}
                </Text>
                <Text style={styles.cardText}>
                  Duration: {formatDuration(workout.duration)}
                </Text>
              </View>
            ))
          )}
        </ScrollView>
      </ScreenLayout>
    </BackgroundLinearGradient>
  );
}

const styles = StyleSheet.create({
  IntroductionContainer: {
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",

    // borderBottomWidth: 1,
    // borderColor: "rgba(255,255,255,0.2)",
    // borderColor: "yellow",
    // borderWidth: 2,
  },
  WelcomeText: {
    color: "white",
    fontWeight: 800,
    fontSize: 18,
  },
  DateText: {
    color: "hsl(0,0%,70%)",
    fontWeight: 300,
    fontSize: 16,
  },

  ContentView: {
    // borderColor: "green",
    // borderWidth: 2,
  },
  ContentHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ContentHeaderTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "400",
  },

  NotificationContainer: {
    backgroundColor: "#595959",
    padding: 16,
    borderRadius: 12,
    marginVertical: 16,
  },
  NotificationText: {
    color: "#ccc",
    fontSize: 16,
  },

  SectionTitle: {
    color: "white",
    paddingBottom: 16,
  },
  card: {
    backgroundColor: "#1d1d1d",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderColor: "#444",
    borderWidth: 1,
  },
  cardTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 4,
  },
  EmptyText: {
    color: "#777",
  },
});
