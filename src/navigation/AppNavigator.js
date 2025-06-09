import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Import Screens
import LoadScreen from "../screens/Auth/LoadScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Load Screen" component={LoadScreen}/>
            <Stack.Screen name="Login Screen" component={LoginScreen}/>
            <Stack.Screen name="Sign Up Screen" component={SignUpScreen}/>
        </Stack.Navigator>
    );
}
