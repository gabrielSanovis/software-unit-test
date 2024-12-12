import React from "react";
import * as S from "./styles";
import { Variants } from "../../theme/variants.interface";
import { Colors } from "../../theme/colors";

type TextProps = {
    children: React.ReactNode;
    variant: Variants["typograph"];
    color: keyof Colors;
}

export const Text = ({ children, variant, color }: TextProps) => {
    return <S.StyledText color={color} variant={variant}>{children}</S.StyledText>
}