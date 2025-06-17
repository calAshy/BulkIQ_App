// - We will use group navigation in order to seperate the user flows. IE Auth Naviagtion for Login/SignUp/Welcome and Main Navigation for the user flow after onboarding. 

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
//Import Screens
import HomeScreen from "../screens/Home/HomeScreen";

const HomeStack = createNativeStackNavigator();

export default function HomeNavigator() {
    return (
        //StackNavigator houses call for Header component. 
            <HomeStack.Navigator   
            screenOptions={({ navigation }) => ({
                header: () => <Header navigation={navigation} title="Home" />
            })}
            >
                <HomeStack.Screen name="Home Screen" component={HomeScreen}/>
            </HomeStack.Navigator>
    );
}