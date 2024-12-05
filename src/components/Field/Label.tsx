import React from "react"
import { StyleSheet, Text } from "react-native";

type LabelProps = {
    children: React.ReactNode;
}

export const Label = ({ children }: LabelProps) => { 
    return (
        <Text style={styles.label}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    label: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 13,
    }
})