import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


const variants = {
    dark: {
        button: { 
            backgroundColor: '#1d1d1d',
            borderColor: '#595959',
            borderWidth: 1,
         },
        text: { color: 'white' },
    },

    light: {
        button: { backgroundColor: '#F6F6F6' },
        text: { color: 'black' },
    }
}

export default function AppButton({title, onPress, variant= 'light', style, textStyle }){
const selected = variants[variant] || variants.light;

    return (
        <TouchableOpacity
             onPress={onPress} 
             style={[styles.button, selected.button]}
        >
            <Text style={[styles.text, selected.text]}>
                {title}
            </Text>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        borderRadius: 3,
        alignItems: 'center',
        width: 340, 
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
        margin: 8,
        borderColor: 'white',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
})