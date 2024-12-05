import React from "react"
import { StyleSheet, View } from "react-native"

type RootProps = {
    children: React.ReactNode;
}

export const Root = ({ children }: RootProps) => {
    return (
        <View style={styles.root}>{children}</View>
    )
}

const styles = StyleSheet.create({
    root: { width: "100%", borderWidth: 1, paddingInline: 10, borderRadius: 10, backgroundColor: "#eeeeee" },
});