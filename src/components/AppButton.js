import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const variants = {
  dark: {
    button: {
      backgroundColor: "#1d1d1d",
      borderColor: "#595959",
      borderWidth: 1,
    },
    text: { color: "white" },
  },

  light: {
    button: { backgroundColor: "#F6F6F6" },
    text: { color: "black" },
  },
};

export default function AppButton({
  title,
  onPress,
  variant = "light",
  style,
  textStyle,
}) {
  const selected = variants[variant] || variants.light;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, selected.button]}
    >
      <Text style={[styles.text, selected.text]}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
