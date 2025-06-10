import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import FormInput from "../../components/FormInput";
import { useForm } from "react-hook-form";

export default function LoginScreen() {
  const {
    control,
    hendleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <LinearGradient
      colors={["#1d1d1d", "#0a0a0a", "#0a0a0a", "#1d1d1d"]}
      style={styles.gradientStyles}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.TitleAndTagLineStyles}>
          <Text style={styles.Wordmark}>BULK IQ</Text>
          <Text style={styles.text}>Login In</Text>
        </View>
        <View style={styles.FormContainer}>
          <FormInput
            name="email"
            control={control}
            placeholder={"Email"}
            rules={{ required: "Email is required" }}
          />
          <FormInput
            name={"password"}
            control={control}
            placeholder={"password"}
            rules={{ required: "Password is required" }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientStyles: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
    width: "100%",
  },
  TitleAndTagLineStyles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Wordmark: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 40,
    marginBottom: 8,
  },
  text: {
    color: "#fff",
  },
  FormContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 120,
  },
});
