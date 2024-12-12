import styled from "styled-components/native";
import { Variants } from "../../theme/variants.interface";



export const Root = styled.TouchableOpacity<{variant: Variants["button"]}>`
    ${({theme, variant}) => theme.buttonVariantAssemblyLine.rootStyles(variant)}
`;

export const Title = styled.Text<{variant: Variants["button"]}>`
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    font-weight: bold;
    font-size: 16px;
`;