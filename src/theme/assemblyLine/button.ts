import { css } from "styled-components/native"
import { VariantButton, Variants } from "../variants.interface"


export const foundation = () => {
    return css`
        padding: 12px;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        flex-direction: row;
    `;
}

export const buttonPreAssembledStyles = (variant: Variants["button"]) => {
    const assembled = {
        [VariantButton.Primary]: css`
            background-color: ${({ theme }) => theme.colors.blue_dark};
            ${foundation()}
        `,
        [VariantButton.Secondary]: css`
            background-color: ${({ theme }) => theme.colors.white};
            ${foundation()}
        `,
        [VariantButton.Danger]: css`
            background-color: ${({ theme }) => theme.colors.red};
            ${foundation()}
        `,
        [VariantButton.Disable]: css`
            background-color: ${({ theme }) => theme.colors.gray};
            ${foundation()}
        `,
        [VariantButton.Outline]: css`
            background-color: transparent;
            border-width: 1px;
            ${foundation()}
        `,
    }
    return assembled[variant];
}