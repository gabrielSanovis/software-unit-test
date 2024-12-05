import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type RootProps = {
    onPress: () => void,
    children: React.ReactNode
}

export const Root = ({ onPress, children }: RootProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.root}
        >
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#000",
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    }
})