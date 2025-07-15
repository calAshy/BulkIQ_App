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
  onRemoveSet,
}) {
  if (!exercise || !Array.isArray(exercise.sets)) return null;
  return (
    <View style={styles.exerciseBox}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>

      {exercise.sets.map((set, setIndex) => (
        <View key={setIndex} style={styles.setRow}>
          <TextInput
            style={styles.setInput}
            placeholder="weight"
            placeholderTextColor={"#ccc"}
            value={set.weight}
            onChangeText={(text) =>
              onChangeSet(index, setIndex, "weight", text)
            }
          />
          <TextInput
            style={styles.setInput}
            placeholder="reps"
            placeholderTextColor={"#ccc"}
            value={set.reps}
            onChangeText={(text) => onChangeSet(index, setIndex, "reps", text)}
          />
          <TextInput
            style={styles.notesInput}
            placeholder="notes"
            placeholderTextColor={"#ccc"}
            value={set.notes}
            onChangeText={(text) => onChangeSet(index, setIndex, "notes", text)}
          />
          <TouchableOpacity
            onPress={() => onRemoveSet(index, setIndex)}
            style={styles.removeButton}
          >
            <Text style={styles.removeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity style={styles.addSet} onPress={() => onAddSet(index)}>
        <Text style={styles.addSetText}>add set</Text>
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
    color: "hsl(0, 0%, 90%)",
    fontWeight: "400",
    fontSize: 16,
    paddingBottom: 16,
  },

  setRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  setInput: {
    flex: 1,
    backgroundColor: "#1d1d1d",
    borderColor: "#595959",
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
    marginHorizontal: 4,
    color: "#fff",
  },
  notesInput: {
    flex: 2,
    marginHorizontal: 4,
    padding: 8,
    backgroundColor: "#1d1d1d",
    borderRadius: 6,
    borderColor: "#595959",
    borderWidth: 1,
    color: "#fff",
  },

  removeButton: {
    marginLeft: 6,
    padding: 6,
    backgroundColor: "#3a3a3a",
    borderRadius: 6,
    borderColor: "#666",
    borderWidth: 1,
  },
  removeButtonText: {
    color: "#ff5555",
    fontWeight: "800",
    fontSize: 14,
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
  addSetText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
