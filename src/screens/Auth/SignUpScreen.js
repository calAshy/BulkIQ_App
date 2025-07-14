import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

import AppButton from "../../components/AppButton";
import AuthFormInput from "../../components/AuthFormInput";
import { BackgroundLinearGradient } from "../../utils/BackgroundLinearGradient";
import ScreenLayout from "../../components/ScreenLayout";

export default function SignUpScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const handleSignUp = async (data) => {
    const { name, email, password } = data;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        username: name,
        email: email,
        createdAt: new Date(),
      });

      Alert.alert("Sign up Successful", `Username: ${name}\nEmail: ${email}`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <BackgroundLinearGradient>
      <ScreenLayout>
        <View style={styles.content}>
          <View style={styles.topContent}>
            <View style={styles.titleContainer}>
              <Text style={styles.wordmark}>BULK IQ</Text>
              <Text style={styles.subtitle}>Sign Up</Text>
            </View>

            <View style={styles.form}>
              <AuthFormInput
                name="name"
                control={control}
                placeholder="Username"
                rules={{ required: "Username is required" }}
              />
              <AuthFormInput
                name="email"
                control={control}
                placeholder="Email"
                rules={{ required: "Email is required" }}
              />
              <AuthFormInput
                name="password"
                control={control}
                placeholder="Password"
                secureTextEntry
                rules={{ required: "Password is required" }}
              />

              {error ? <Text style={styles.error}>{error}</Text> : null}

              <View style={styles.signUpButton}>
                <AppButton
                  title="SIGN UP"
                  variant="dark"
                  onPress={handleSubmit(handleSignUp)}
                />
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Already have an account?{" "}
              <Text
                style={styles.link}
                onPress={() => navigation.navigate("Login Screen")}
              >
                Log In
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
  error: {
    color: "red",
    textAlign: "left",
    fontSize: 14,
  },
  signUpButton: {
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
