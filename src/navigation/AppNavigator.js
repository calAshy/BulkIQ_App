import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthNavigator from "./AuthNavigator";
//import HomeNavigator from "./HomeNavigator";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
}
