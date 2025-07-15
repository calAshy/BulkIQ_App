import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WorkoutSummaryBox({
  name,
  exerciseCount,
  duration,
  date,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.detail}>{exerciseCount} Exercises</Text>
      <Text style={styles.detail}>Duration: {duration}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#222",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  detail: {
    color: "#ccc",
    fontSize: 14,
  },
  date: {
    marginTop: 6,
    fontSize: 12,
    color: "#888",
  },
});
