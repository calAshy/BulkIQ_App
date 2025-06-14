import React from "react";
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../../components/AppButton";
import FormInput from "../../components/FormInput";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";

export default function LoginScreen( { navigation } ) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginError, setLoginError] = useState ('');

  const onLogin = async (data) => {
    const { email, password } = data;

    try{
      const userCredential = await signInWithEmailAndPassword( auth, email, password);
      alert("User Logged On: ", userCredential.user);
      navigate.navigation("Home Screen"); 
    } catch(error) {
      alert("Login Error: ", error.message);
      setLoginError(error.message);
    }
  };

  return (
    <LinearGradient
      colors={["#1d1d1d", "#0a0a0a", "#0a0a0a", "#1d1d1d"]}
      style={styles.gradientStyles}
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <ScrollView
            contentContainerStyle={styles.scrollView}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.titleContainer}>
              <Text style={styles.Wordmark}>BULK IQ</Text>
              <Text style={styles.text}>Login</Text>
            </View>
            <View style={styles.FormContainer}>
              <FormInput
                name="email"
                control={control}
                placeholder={"Email or Username"}
                rules={{ required: "Email is required" }}
              />
              <FormInput
                name={"password"}
                control={control}
                placeholder={"Password"}
                secureTextEntry
                rules={{ required: "Password is required" }}
              />

              {loginError ? <Text style={{color: 'red' }}> {loginError} </Text> : null}

              <Text
                style={styles.ForgotPassword}
                onPress={() => alert("Navigate to Forgot Password")}
              >
                Forgot Password?
              </Text>
            </View>
            <View style={styles.ButtonContainer}>
              <AppButton
                title="LOGIN"
                variant="light"
                onPress={handleSubmit(onLogin)}
              />
            </View>
            <View style={styles.SignUpTextContainer}>
              <Text style={styles.text}>
                Don't have an account?{" "}
                <Text
                  style={styles.SignUpLink}
                  onPress={() => navigation.navigate("Sign Up Screen")}
                >
                  Sign Up
                </Text>
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientStyles: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
  },
  titleContainer: {
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
  ForgotPassword: {
    color: "#fff",
    width: "100%",
    textAlign: "right",
    paddingRight: 20,
    marginTop: 10,
  },
  ButtonContainer: {
    flex: 0,
    marginBottom: 30,
    alignItems: "center",
  },
  SignUpTextContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  SignUpLink: {
    fontWeight: "bold",
  },
});
