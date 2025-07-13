import React, { useState } from "react";
import {
  View,
  StyleSheet,
  LogBox,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BackgroundLinearGradient } from "../../utils/BackgroundLinearGradient";
import { DateDisplay } from "../../utils/CurrentDate";
import EllipseMenu from "../../components/EllipseMenu";
import AppButton from "../../components/AppButton";

export default function WorkoutForm() {
  const insets = useSafeAreaInsets();

  const [isModalVisible, setModalVisible] = useState(false);
  const [workoutName, setWorkoutName] = useState("");
  const [selectedMuscle, setSelectedMuscle] = useState(null);

  const [selectedExercise, setSelectedExercise] = useState([]);

  const muscleGroups = [
    "Chest",
    "Back",
    "Legs",
    "Shoulders",
    "Biceps",
    "Triceps",
    "Core",
    "Glutes",
    "Calves",
  ];

  const muscleData = {
    Chest: ["Bench Press", "Incline Dumbbell Press", "Chest Fly"],
    Back: ["Pull-Up", "Bent Over Row", "Deadlift"],
    Legs: ["Squat", "Leg Press", "Lunge"],
    Biceps: ["Bicep Curl", "Hammer Curl", "Preacher Curl"],
    Triceps: ["Tricep Pushdown", "Kickbacks", "Overhead Tricep Extension"],
    Shoulders: ["Overhead Press", "Lateral Raise", "Face Pull"],
    Core: ["Plank", "Russian Twist", "Hanging Leg Raise"],
    Calves: ["Don't ask Dan cos he wouldn't fucking know"],
  };

  return (
    <BackgroundLinearGradient>
      <ScrollView
        style={[
          styles.container,
          {
            // paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: 16 + insets.left,
            paddingRight: 16 + insets.right,
          },
        ]}
      >
        <View style={styles.workoutContainer}>
          <View style={styles.LogMetaContainer}>
            <View style={styles.LogMeta}>
              <Text style={styles.TitleText}>Name:</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Title"
                placeholderTextColor={"#ccc"}
                value={workoutName}
                onChangeText={setWorkoutName}
              />
            </View>

            <View style={styles.LogMeta}>
              <Text style={styles.TitleText}>Start Time:</Text>
              <Text style={styles.Text}>{DateDisplay}</Text>
            </View>

            <View style={styles.LogMeta}>
              <Text style={styles.TitleText}>End Time:</Text>
            </View>
          </View>
          <View style={styles.toggleOptions}>
            <EllipseMenu />
          </View>
        </View>

        {selectedExercise.map((exercise, index) => (
          <View key={index} style={styles.exerciseBox}>
            <Text style={styles.exerciseName}>{exercise}</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                placeholder="Weight"
                placeholderTextColor={"#ccc"}
              />
              <TextInput
                style={styles.input}
                placeholder="Reps"
                placeholderTextColor={"#ccc"}
              />
              <TextInput
                style={styles.input}
                placeholder="Notes"
                placeholderTextColor={"#ccc"}
                multiline
              />
            </View>
          </View>
        ))}

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          {/* Full-width Button */}
          <TouchableOpacity
            style={styles.fullButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonText}>add exercise</Text>
          </TouchableOpacity>

          {/* Row of Two Buttons */}
          <View style={styles.rowButtons}>
            <TouchableOpacity style={styles.halfButton}>
              <Text style={styles.buttonText}>workout template</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.halfButton}>
              <Text style={styles.buttonText}>finish workout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={isModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.closeButtonContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.modalText}>Modal is visible!</Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.muscleScroll}
              contentContainerStyle={styles.muscleScrollContent}
            >
              {muscleGroups.map((muscle) => (
                <TouchableOpacity
                  key={muscle}
                  style={[
                    styles.muscleButton,
                    selectedMuscle === muscle && styles.muscleButtonSelected,
                  ]}
                  onPress={() => setSelectedMuscle(muscle)}
                >
                  <Text
                    style={[
                      styles.muscleText,
                      selectedMuscle === muscle && styles.muscleTextSelected,
                    ]}
                  >
                    {muscle}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View style={styles.exerciseList}>
              {muscleData[selectedMuscle]?.map((exercise, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.exerciseItem}
                  onPress={() => {
                    setSelectedExercise([...selectedExercise, exercise]);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.exerciseText}>{exercise}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </BackgroundLinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "blue",
    borderWidth: 2,
    width: "100%",
  },
  content: {
    borderColor: "red",
    borderWidth: 2,
  },

  workoutContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 20,
    marginVertical: 12,
    paddingHorizontal: 0,
    backgroundColor: "#2a2a2a",
  },
  LogMeta: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 6,
    width: "100%",
    // marginLeft: 20,
  },

  toggleOptions: {
    // borderColor: "purple",
    // borderWidth: 2,
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingRight: 10,
    paddingTop: 5,
  },
  TitleText: {
    color: "white",
    fontWeight: "bold",
    marginRight: 8,
  },
  Text: {
    color: "white",
  },
  textInput: {
    color: "#ccc",
    fontSize: 16,
    paddingVertical: 0,
    marginVertical: 0,
    includeFontPadding: false,
    textAlignVertical: "center",
    marginVertical: 0,
    flex: 1,
  },

  buttonContainer: {
    width: "100%",
    // paddingVertical: 8,
  },
  fullButton: {
    backgroundColor: "#1d1d1d",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#595959",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginBottom: 8,
  },
  rowButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfButton: {
    width: "49%",
    backgroundColor: "#1d1d1d",
    borderColor: "#595959",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },

  modalOverlay: {
    flex: 1,
    display: "flex",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    height: "90%",
    backgroundColor: "#141414",
    borderRadius: 10,
    borderColor: "#dadada",
    borderWidth: 2,
    marginTop: "5%",
  },
  closeButtonContainer: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 1,
  },
  closeButton: {
    padding: 8,
  },
  modalText: {
    color: "white",
    fontSize: 16,
    marginVertical: 16,
    paddingLeft: 16,
  },

  muscleScroll: {
    marginTop: 32,
    maxHeight: 50,
  },
  muscleScrollContent: {
    paddingHorizontal: 12,
    alignItems: "center",
  },
  muscleButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#2a2a2a",
    borderRadius: 20,
    marginRight: 8,
    borderColor: "#444",
    borderWidth: 1,
  },
  muscleButtonSelected: {
    backgroundColor: "#ddd",
    borderColor: "#ccc",
  },
  muscleText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  muscleTextSelected: {
    color: "black",
  },

  exerciseList: {
    marginTop: 48,
    paddingHorizontal: 16,
  },
  exerciseItem: {
    backgroundColor: "#1d1d1d",
    padding: 12,
    borderRadius: 8,
    borderColor: "#333",
    borderWidth: 1,
    marginBottom: 12,
  },
  exerciseText: {
    color: "white",
    fintSize: 16,
  },

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
});
