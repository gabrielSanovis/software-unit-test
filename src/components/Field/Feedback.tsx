import React from "react"
import { StyleSheet, Text } from "react-native";

type LabelProps = {
    children: React.ReactNode;
    type: "wrong" | "alert" | "success";
    show: boolean;
}

export const Feedback = ({ children, type, show }: LabelProps) => {
    const getColor = () => type === "success"
        ? "green"
        : type === "alert"
            ? "orange"
            : "red";

    if (!show) return;

    return (
        <Text style={{ ...styles.label, color: getColor() }}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 12,
    }
})