import React from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, View, StyleSheet} from "react-native";

export default function FormInput ({ control, name, rules, placeholder, secureTextEntry = false}) {
    return (
        <View>
            <Controller
                control={control}
                name= {name}
                rules={rules}
                render={({ field: { onChange, value}, fieldState: { error } }) => (
                    <>
                    <TextInput
                    style={[styles]}/>
                    </>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 8,
    },
    errorInput: {
        borderColor: 'red'
    },

    errorText: {
        color: 'red',
        fontSize: 12,
    }
})