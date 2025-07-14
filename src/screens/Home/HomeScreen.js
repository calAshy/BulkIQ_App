import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Button,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import SecondaryButton from "../../components/SecondaryButton.js";
import { fetchUsername } from "../../Firebase/userService.js";
import { formattedDate } from "../../utils/CurrentDate.js";
import { BackgroundLinearGradient } from "../../utils/BackgroundLinearGradient.js";
import { submitSignOut } from "../../Firebase/authController.js";
import BottomNav from "../../components/NavBar.js";
import ScreenLayout from "../../components/ScreenLayout.js";

export default function HomeScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const insets = useSafeAreaInsets();
  //Retrieve and display username code
  useEffect(() => {
    const getUsername = async () => {
      const name = await fetchUsername();
      if (name) setUsername(name);
    };
    getUsername();
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
            <SecondaryButton
              title="Start a workout"
              onPress={() => navigation.navigate("Workout Form")}
            />
          </View>
          {/* Notification Placeholder */}
          <View style={styles.NotificationContainer}>
            <Text style={styles.NotificationText}>
              🔔 Notifications go here
            </Text>
          </View>
          {/* Recent Workouts */}
          <Text style={styles.SectionTitle}></Text>
        </ScrollView>
        <BottomNav />
      </ScreenLayout>
    </BackgroundLinearGradient>
  );
}

const styles = StyleSheet.create({
  IntroductionContainer: {
    // paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
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
});
