import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";

import { BackgroundLinearGradient } from "../../utils/BackgroundLinearGradient.js";
import ScreenLayout from "../../components/ScreenLayout";
import { DateDisplay } from "../../utils/CurrentDate";
import EllipseMenu from "../../components/EllipseMenu";
import ExerciseBox from "../../components/ExerciseBox";

export default function WorkoutForm() {
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
      <ScreenLayout scrollable keyboardAvoiding>
        <View styles={styles.container}>
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

          {/* Create exercise box */}
          {selectedExercise.map((exercise, index) => (
            <ExerciseBox
              key={index}
              exercise={exercise}
              index={index}
              onChangeSet={(exerciseIndex, setIndex, field, value) => {
                const updateExercises = [...selectedExercise];
                updateExercises[exerciseIndex].sets[setIndex][field] = value;
                setSelectedExercise(updateExercises);
              }}
              onAddSet={(exerciseIndex) => {
                const updateExercises = [...selectedExercise];
                updateExercises[exerciseIndex] = {
                  ...updateExercises[exerciseIndex],
                  sets: [
                    ...updateExercises[exerciseIndex].sets,
                    { weight: "", reps: "", notes: "" },
                  ],
                };
                setSelectedExercise(updateExercises);
              }}
              onRemoveSet={(exerciseIndex, setIndex) => {
                const updateExercises = [...selectedExercise];
                updateExercises[exerciseIndex].sets.splice(setIndex, 1);
                setSelectedExercise(updateExercises);
              }}
              onRemoveExercise={() => {
                const updateExercises = [...selectedExercise];
                updateExercises.splice(index, 1);
                setSelectedExercise(updateExercises);
              }}
            />
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
        </View>

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
                      setSelectedExercise((prev) => [
                        ...prev,
                        {
                          name: exercise,
                          sets: [{ weight: "", reps: "", notes: "" }],
                        },
                      ]);
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
      </ScreenLayout>
    </BackgroundLinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  workoutContainer: {
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: 12,
    paddingHorizontal: 0,
    backgroundColor: "#2a2a2a",
    // borderColor: "blue",
    // borderWidth: 2,
  },
  LogMeta: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 6,
    width: "100%",
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
    height: "80%",
    backgroundColor: "#141414",
    borderRadius: 16,
    borderColor: "#3a3a3a",
    borderWidth: 2,
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
    fontSize: 16,
  },
});
