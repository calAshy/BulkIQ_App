// - We will use group navigation in order to seperate the user flows. IE Auth Naviagtion for Login/SignUp/Welcome and Main Navigation for the user flow after onboarding. 

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Import Screens
import LoadScreen from "../screens/Auth/LoadScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";

const AuthStack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
            <AuthStack.Navigator screenOptions={{headerShown: false}}>
                <AuthStack.Screen name="Load Screen" component={LoadScreen} options={ { headerShown: false } }/>

                {<AuthStack.Screen name="Login Screen" component={LoginScreen} /> }


                <AuthStack.Screen name="Sign Up Screen" component={SignUpScreen} />
            </AuthStack.Navigator>
    );
}