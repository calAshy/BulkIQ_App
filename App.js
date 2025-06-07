import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUpScreen from './src/screens/Auth/SignUpScreen';
import LoadScreen from './src/screens/Auth/LoadScreen';




export default function App() {
  return (
    <>
    <LoadScreen/>
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
