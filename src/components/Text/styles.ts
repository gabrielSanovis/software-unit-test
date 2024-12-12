import styled from "styled-components/native";
import { Variants } from "../../theme/variants.interface";
import { Colors } from "../../theme/colors";

export const StyledText = styled.Text<{variant: Variants["typograph"], color: keyof Colors }>`
    ${({ theme, variant }) => theme.typographVariantAssemblyLine.rootStyles(variant)}
    color: ${({theme, color}) => theme.colors[color]};
`;