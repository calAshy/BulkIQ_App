import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../../components/AppButton";
import AuthFormInput from "../../components/AuthFormInput";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { useState } from "react";

export default function LoginScreen({ navigation }) {
  //Login Auth Logic
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginError, setLoginError] = useState("");

  const onLogin = async (data) => {
    const { email, password } = data;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
        case "auth/wrong-password":
          setLoginError("Incorrect Password");
          break;
        case "auth/invalid-email":
          setLoginError("Invalid Email.");
          break;
        case "auth/user-not-found":
          setLoginError("No account found with this email.");
          break;
        default:
          setLoginError("Login Failed. Please try again");
      }
    }
  };
  //Login Auth Logic End.
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={["#1d1d1d", "#0a0a0a", "#0a0a0a", "#1d1d1d"]}
      style={styles.gradient}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[
          styles.container,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Text style={styles.wordmark}>BULK IQ</Text>
            <Text style={styles.subtitle}>Login</Text>
          </View>
          <View style={styles.form}>
            <AuthFormInput
              name="email"
              control={control}
              placeholder={"Email or Username"}
              rules={{ required: "Email is required" }}
            />
            <AuthFormInput
              name={"password"}
              control={control}
              placeholder={"Password"}
              secureTextEntry
              rules={{ required: "Password is required" }}
            />

            {loginError ? (
              <Text style={styles.error}> {loginError} </Text>
            ) : null}

            <Text
              style={styles.forgot}
              onPress={() => alert("Navigate to Forgot Password")}
            >
              Forgot Password?
            </Text>
          </View>
          <AppButton
            title="LOGIN"
            variant="light"
            onPress={handleSubmit(onLogin)}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={[styles.footer, { paddingBottom: insets.bottom }]}>
        <Text style={styles.footerText}>
          Don't have an account?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Sign Up Screen")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: "100%",
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: {
    alignItems: "center",
    marginBottom: 64,
  },
  wordmark: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 40,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
  },
  form: {
    gap: 16,
    marginBottom: 32,
  },
  forgot: {
    color: "#ccc",
    width: "100%",
    textAlign: "right",
    paddingRight: 20,
    // marginTop: 10,
  },
  error: {
    color: "red",
    textAlign: "left",
    fontSize: 14,
  },
  footer: {
    alignItems: "center",
    paddingBottom: 16,
  },
  footerText: {
    color: "#fff",
  },
  link: {
    fontWeight: "bold",
  },
});
