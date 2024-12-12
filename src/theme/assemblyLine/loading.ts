import { colors } from "../colors"
import { VariantLoading, Variants } from "../variants.interface"

export const loadingColor = (variant: Variants["loading"]) => {
    const piece = {
        [VariantLoading.Primary]: colors.white,
        [VariantLoading.Secondary]: colors.blue_dark
    }

    return piece[variant];
}