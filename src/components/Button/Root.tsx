import React from "react";
import { ViewProps } from "react-native"
import * as S from "./root.styles";
import { Variants } from "../../theme/variants.interface";
import { Loading } from "../Loading";
import { useTheme } from "styled-components/native";
import { VariantProvider } from "./VariantContext";

type RootProps = {
    onPress: () => void;
    children: React.ReactNode;
    variant: Variants["button"];
    isLoading?: boolean;
    isDisabled?: boolean;
} & ViewProps;

export const Root = ({
    children,
    onPress,
    variant,
    isLoading = false,
    isDisabled = false,
    ...rest
}: RootProps) => {
    const { buttonVariantAssemblyLine } = useTheme();
    const checkIfIsDisabled = (variant: Variants["button"]) => {
        return isDisabled ? "disable" as Variants["button"] : variant;
    }
    return (
        <VariantProvider variant={checkIfIsDisabled(variant)}>
            <S.Root
                {...rest}
                variant={checkIfIsDisabled(variant)}
                onPress={onPress}
                disabled={isLoading || isDisabled}
            >
                {isLoading ? (
                    <Loading
                        size="small"
                        type={buttonVariantAssemblyLine.loadingVariant(checkIfIsDisabled(variant))}
                    />
                ) : (
                    children
                )}
            </S.Root>
        </VariantProvider>
    );
}
