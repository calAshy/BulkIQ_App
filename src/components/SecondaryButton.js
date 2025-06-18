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
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
},

text: {
    color: 'white',
},
});