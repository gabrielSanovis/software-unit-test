import React from "react"
import * as S from "./styles";

type LoadingProps = {
    size: "small" | "large";
    type: "primary" | "secondary"
}

export const Loading = ({ size, type }: LoadingProps) => {
    return <S.StyledLoading size={size} variant={type} />
}