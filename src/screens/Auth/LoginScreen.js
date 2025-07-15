import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";
import AuthFormInput from "../../components/AuthFormInput";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { useState } from "react";
import { BackgroundLinearGradient } from "../../utils/BackgroundLinearGradient";
import ScreenLayout from "../../components/ScreenLayout";

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
  return (
    <BackgroundLinearGradient>
      <ScreenLayout>
        <View style={styles.content}>
          <View style={styles.topContent}>
            <View style={styles.titleContainer}>
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
              <View style={styles.loginButton}>
                <AppButton
                  title="LOGIN"
                  variant="light"
                  onPress={handleSubmit(onLogin)}
                />
              </View>
            </View>
          </View>
          <View style={styles.footer}>
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
        </View>
      </ScreenLayout>
    </BackgroundLinearGradient>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 32,
    paddingHorizontal: 24,
    // borderWidth: 1,
    // borderColor: "blue",
  },
  topContent: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 20,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  wordmark: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 40,
    letterSpacing: 2,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
  },

  form: {
    gap: 20,
    marginVertical: 32,
    width: "100%",
  },
  forgot: {
    color: "hsl(0, 0%, 70%)",
    textAlign: "right",
    // paddingRight: 20,
    // marginTop: 10,
  },
  error: {
    color: "red",
    textAlign: "left",
    fontSize: 14,
  },

  loginButton: {
    marginTop: 32,
  },

  footer: {
    alignItems: "center",
    paddingBottom: 16,
  },
  footerText: {
    color: "hsl(0, 0%, 70%)",
  },
  link: {
    fontWeight: "800",
    color: "hsl(0, 0%, 90%)",
  },
});
