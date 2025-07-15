import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>❤️ Favorites Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2d528cff",
  },
  text: { color: "#fff", fontSize: 24 },
});
