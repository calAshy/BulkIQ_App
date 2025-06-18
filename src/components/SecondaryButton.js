import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SecondaryButton({title, onPress }){
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.buttonDesign}
        >

        <Text style={styles.text}>
            {title}
        </Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({

buttonDesign: {
    borderWidth: 1,
    borderColor: 'white',
},

text: {
    color: 'white',
},
});