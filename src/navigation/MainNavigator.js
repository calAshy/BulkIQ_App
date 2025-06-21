// - We will use group navigation in order to seperate the user flows. IE Auth Naviagtion for Login/SignUp/Welcome and Main Navigation for the user flow after onboarding. 

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from "../components/Header";


//Import Screens
import HomeScreen from "../screens/Home/HomeScreen";
import WorkoutForm from "../screens/Workout/WorkoutScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackNavigator() {
    return (
        //StackNavigator houses call for Header component. 
            <Stack.Navigator   
                screenOptions={({ navigation }) => ({
                header: () => <Header navigation={navigation} title="Home" />
            })}
            >
                <Stack.Screen name="Home Screen" component={HomeScreen}/>
                <Stack.Screen name="Workout Form" component={WorkoutForm}/>
            </Stack.Navigator>
    );
}

export default function MainNavigation() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={HomeStackNavigator} />
        </Drawer.Navigator>
    )
}