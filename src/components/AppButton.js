import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


const variants = {
    dark: {
        button: { backgroundColor: 'black' },
        text: { color: 'white' },
    },

    light: {
        button: { backgroundColor: 'white' },
        text: { color: 'black' },
    }
}

export default function AppButton({title, onPress, variant= ' dark ', style, textStyle }){
const selected = variants[variant] || variants.dark;

    return (
        <TouchableOpacity
             onPress={onPress} 
             style={[styles.button]}
        >
            <Text style={styles.text}>
                Button Text
            </Text>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        borderRadius: 3,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
})