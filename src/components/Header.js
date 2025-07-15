//This is the component for our customisable header visable on the HomeNav screens, like Home.

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HamburgerIcon from "./HamburgerMenu";

export default function Header({ navigation, title }) {
  return (
    <View style={styles.container}>
      <HamburgerIcon
        style={styles.icon}
        onPress={() => navigation.toggleDrawer()}
      />
      <Text style={styles.title}>{title || "BULK HQ"}</Text>
      {/* Placeholder for spacing */}
      <View style={styles.placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1d1d1d",
    paddingHorizontal: 18,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  icon: {
    color: "white",
    fontSize: 36,
  },
  title: {
    color: "white",
    fontWeight: 800,
    fontSize: 20,
    // backgroundColor: "purple",
  },
  placeholder: {
    width: 24,
  },
});
