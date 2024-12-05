import React from "react";
import { StyleSheet, Text } from "react-native";

type TitleProps = {
    children: React.ReactNode;
}

export const Title = ({ children }: TitleProps) => {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
    }
})