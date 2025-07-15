import React from "react";
import { View, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import Animated from "react-native-reanimated";

import HomeScreen from "../screens/Home/HomeScreen";
import StatsScreen from "../screens/Stats/StatsScreen";
import WorkoutScreen from "../screens/Workout/WorkoutScreen";
import FavoritesScreen from "../screens/Favorites/FavoritesScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              return (
                <Ionicons
                  name={iconName}
                  size={24}
                  color={focused ? "#fff" : "#aaa"}
                />
              );
            case "Stats":
              iconName = "bar-chart-2";
              return (
                <Feather
                  name={iconName}
                  size={24}
                  color={focused ? "#fff" : "#aaa"}
                />
              );
            case "Add":
              return (
                <View style={styles.addButton}>
                  <AntDesign name="plus" size={28} color="#fff" />
                </View>
              );
            case "Favorites":
              iconName = "heart-outline";
              return (
                <Ionicons
                  name={iconName}
                  size={24}
                  color={focused ? "#fff" : "#aaa"}
                />
              );
            case "Profile":
              iconName = "person-outline";
              return (
                <Ionicons
                  name={iconName}
                  size={24}
                  color={focused ? "#fff" : "#aaa"}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Add" component={WorkoutScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    marginHorizontal: 20,
    elevation: 5,
    backgroundColor: "#1c1c1cff",
    borderRadius: 12,
    height: 70,
    paddingHorizontal: 20,
    borderTopWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5,
  },
});
