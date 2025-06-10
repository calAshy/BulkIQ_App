import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignUpScreen from "./src/screens/Auth/SignUpScreen";
import LoadScreen from "./src/screens/Auth/LoadScreen";
import LoginScreen from "./src/screens/Auth/LoginScreen";

export default function App() {
  return (
    <>
      <LoginScreen />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
