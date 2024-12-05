import React from "react";
import { StyleSheet, View } from "react-native";

type RootProps = {
    children: React.ReactNode;
}

export const Root = ({children}: RootProps) => {
    return (
        <View style={styles.root}>{children}</View>
    );
};

const styles = StyleSheet.create({
    root: { alignItems: "flex-start", rowGap: 4 },
});
