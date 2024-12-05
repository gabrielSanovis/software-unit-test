import React from "react";
import { StyleSheet, TouchableOpacity, ViewProps } from "react-native";

type RootProps = {
    onPress: () => void,
    children: React.ReactNode
} & ViewProps;

export const Root = ({ onPress, children, ...rest }: RootProps) => {
    return (
        <TouchableOpacity
            {...rest}
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