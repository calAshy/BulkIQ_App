import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

import { useNavigation } from "@react-navigation/native";

export default function BottomNav() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Text>Home</Text>
            <Text>Home</Text>
            <Text>Home</Text>
            <Text>Home</Text> */}

      <TouchableOpacity onPress={() => navigation.navigate("Home Screen")}>
        <Ionicons name="home-outline" size={32} color={"#ccc"} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Home Screen")}>
        <Ionicons name="home-outline" size={32} color={"#ccc"} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Workout Form")}
        style={styles.centerButton}
      >
        <AntDesign name="pluscircleo" size={48} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Home Screen")}>
        <Ionicons name="home-outline" size={32} color={"#ccc"} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Home Screen")}>
        <Feather name="settings" size={32} color="#ccc" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopColor: "#ccc",
    backgroundColor: "#fff",
    backgroundColor: "#1a1a1a",
    width: "100%",
    bottom: 32,
    paddingTop: 20,
    // borderWidth: 1,
    // borderColor: "red",
  },
  centerButton: {
    borderRadius: 35,
    backgroundColor: "purple",
    elevation: 10,
    shadowColor: "hsl(0, 0%, 90%)",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});
