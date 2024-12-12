import { css } from "styled-components/native"
import { VariantTypograph } from "../variants.interface"

export const typographPreAssembledStyles = () => {
    return {
        [VariantTypograph.Header]: css`
            font-weight: bold;
            font-size: 32px;
        `,
        [VariantTypograph.BigBold]: css`
            font-weight: bold;
            font-size: 18px;
        `,
        [VariantTypograph.LargeBold]: css`
            font-weight: bold;
            font-size: 16px;
        `,
        [VariantTypograph.NormalBold]: css`
            font-weight: bold;
            font-size: 14px;
        `,
        [VariantTypograph.NormalRegular]: css`
            font-weight: 400;
            font-size: 14px;
        `,
        [VariantTypograph.SmallBold]: css`
            font-weight: bold;
            font-size: 13px;
        `,
        [VariantTypograph.SmallRegular]: css`
            font-weight: 400;
            font-size: 13px;
        `,
        [VariantTypograph.SmallRegularUnderline]: css`
            font-weight: 400;
            font-size: 13px;
            text-decoration: underline;
        `,
    }
}