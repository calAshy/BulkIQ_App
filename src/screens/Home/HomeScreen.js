import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Button,
} from "react-native";

import SecondaryButton from "../../components/SecondaryButton.js";
import { fetchUsername } from "../../Firebase/userService.js";
import { formattedDate } from "../../utils/CurrentDate.js";
import { BackgroundLinearGradient } from "../../utils/BackgroundLinearGradient.js";
import { submitSignOut } from "../../Firebase/authController.js";
import BottomNav from "../../components/NavBar.js";

export default function HomeScreen({ navigation }) {
  const [username, setUsername] = useState("");
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
      <View style={styles.container}>
        <View style={styles.IntroductionContainer}>
          <View style={styles.WelcomeAndDateText}>
            <Text style={styles.WelcomeText}>Welcome, {username}!</Text>
            <Text style={styles.DateText}>{formattedDate}</Text>
          </View>
          <Button
            title="Start a workout"
            onPress={() => navigation.navigate("Workout Form")}
          />
        </View>
        <ScrollView style={styles.scrollView}></ScrollView>
      </View>
      <BottomNav />
    </BackgroundLinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    //Safearea View Container.
    paddingTop: 20,
    flex: 1,
    // justifyContent: "space-between",
    // alignItems: "center",
    width: "100%",
    backgroundColor: "transparent",
    // borderColor: "red",
    // borderWidth: 2,
  },

  IntroductionContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    // borderColor: "yellow",
    // borderWidth: 2,
  },

  scrollView: {
    flex: 1,
    // width: "100%",
    borderColor: "green",
    borderWidth: 2,
  },

  WelcomeText: {
    color: "white",
    fontWeight: 800,
    fontSize: 20,
  },
  DateText: {
    color: "white",
    fontWeight: 300,
    fontSize: 15,
  },
});
