import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { BackgroundLinearGradient } from "../../utils/BackgroundLinearGradient";
import ScreenLayout from "../../components/ScreenLayout";

import AppButton from "../../components/AppButton";

export default function LoadScreen({ navigation }) {
  return (
    <BackgroundLinearGradient>
      <ScreenLayout>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.wordmark}>BULK IQ</Text>
            <Text style={styles.tagline}>Lets get Started!</Text>
          </View>
          <View style={styles.buttonContainer}>
            <AppButton
              title="LOGIN"
              onPress={() => navigation.navigate("Login Screen")}
            ></AppButton>

            <AppButton
              title="SIGN UP"
              variant="dark"
              onPress={() => navigation.navigate("Sign Up Screen")}
            ></AppButton>
          </View>
        </View>
      </ScreenLayout>
    </BackgroundLinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },

  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wordmark: {
    color: "white",
    fontWeight: 800,
    fontSize: 40,
    marginBottom: 8,
  },
  tagline: {
    color: "white",
    fontSize: 16,
  },

  buttonContainer: {
    flexDirection: "column",
    gap: 16,
    alignItems: "center",
    marginBottom: 48,
  },
});
