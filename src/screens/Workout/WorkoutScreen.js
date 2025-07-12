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
  const [workoutName, setWorkoutName] = useState("");

  const [isModalVisible, setModalVisible] = useState(false);

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
            <View style={styles.seperator} />

            <View style={styles.LogMeta}>
              <Text style={styles.TitleText}>Start Time:</Text>
              <Text style={styles.Text}>{DateDisplay}</Text>
            </View>
            <View style={styles.seperator} />

            <View style={styles.LogMeta}>
              <Text style={styles.TitleText}>End Time:</Text>
            </View>
          </View>
          <View style={styles.toggleOptions}>
            <EllipseMenu />
          </View>
        </View>
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

  //   seperator: {
  //     height: 1,
  //     width: "80%",
  //     backgroundColor: "white",
  //     marginVertical: 2,
  //   },

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
  },
});
