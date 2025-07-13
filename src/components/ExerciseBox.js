import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ExerciseBox({
  exercise,
  index,
  onChangeSet,
  onAddSet,
}) {
  return (
    <View style={styles.exerciseBox}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>

      {exercise.sets.map((set, setIndex) => (
        <View key={setIndex} style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="weight"
            placeholderTextColor={"#ccc"}
            value={set.weight}
            onChangeText={(text) =>
              onChangeSet(index, setIndex, "weight", text)
            }
          />
          <TextInput
            style={styles.input}
            placeholder="reps"
            placeholderTextColor={"#ccc"}
            value={set.reps}
            onChangeText={(text) => onChangeSet(index, setIndex, "reps", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="notes"
            placeholderTextColor={"#ccc"}
            value={set.notes}
            onChangeText={(text) => onChangeSet(index, setIndex, "notes", text)}
          />
        </View>
      ))}

      <TouchableOpacity style={styles.addSet} onPress={() => onAddSet(index)}>
        <Text style={styles.addSetButton}>add set</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseBox: {
    backgroundColor: "#2a2a2a",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#444",
  },
  exerciseName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "#1d1d1d",
    borderColor: "#595959",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
    color: "#fff",
  },
  addSet: {
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#2a2a2a",
    borderRadius: 8,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#444",
  },
  addSetButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
