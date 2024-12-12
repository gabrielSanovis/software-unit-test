import React from "react";
import { useTheme } from "styled-components/native";
import { Text } from "../Text"
import { Variants } from "../../theme/variants.interface";
import { useVariant } from "./VariantContext";

type TitleProps = {
    children: React.ReactNode;
}

export const Title = ({ children }: TitleProps) => {
    const { buttonVariantAssemblyLine } = useTheme();
    const { getVariant } = useVariant();
    return (
        <Text
            variant={buttonVariantAssemblyLine.typographVariant()}
            color={buttonVariantAssemblyLine.typographColor(getVariant<Variants["button"]>())}
        >
            {children}
        </Text>
    )
}