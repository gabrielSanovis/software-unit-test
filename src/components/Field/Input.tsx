import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native"

type InputProps = TextInputProps

export const Input = ({ ...rest }: InputProps) => {
    return (
        <TextInput
            {...rest}
            style={styles.input}
        />
    )
}
const styles = StyleSheet.create({
    input: { borderWidth: 1, padding: 10, marginVertical: 10 },
});
