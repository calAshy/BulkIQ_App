import React from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput, View, StyleSheet } from "react-native";

export default function FormInput({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry = false,
  style,
}) {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View style={[styles.container, style]}>
          <TextInput
            style={[styles.input, error ? styles.inputError : null]}
            placeholder={placeholder}
            placeholderTextColor="#aaa"
            secureTextEntry={secureTextEntry}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  input: {
    borderColor: "#ccc",
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#1f1f1f",
    color: "white",
    fontSize: 12,
  },
  errorInput: {
    borderColor: "red",
    borderWidth: 1,
  },
  errorText: {
    marginTop: 4,
    color: "red",
    fontSize: 12,
  },
});
