import React from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, View, StyleSheet} from "react-native";

export default function FormInput ({ control, name, rules, placeholder, secureTextEntry = false}) {
    return (
        <View style={styles.wrapper}>
            <Controller
                control={control}
                name= {name}
                rules={rules}
                render={({ field: { onChange, value}, fieldState: { error } }) => (
                    <>
                        <TextInput
                            style={[styles.input,
                            error ? styles.errorInput : null
                        ]}
                        onChangeText={onChange}
                        value={value}
                        placeholder={placeholder}
                        placeholderTextColor="#aaa"
                        secureTextEntry={secureTextEntry}
                    />
                    {error && <Text style={styles.errorText}>{error.message}</Text>}
                    </>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    wrapper: {
        width: '100%',
        marginVertical: 10,
        alignItems: 'center',
    },

    input: {
        borderWidth: 0,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 8,
        width: '90%',
        backgroundColor: '#1f1f1f',
        color: 'white',
        fontSize: 16,
    },
    errorInput: {
        borderColor: 'red',
        borderWidth: 1,
    },

    errorText: {
        marginTop: 3,
        color: 'red',
        fontSize: 12,
    }
})