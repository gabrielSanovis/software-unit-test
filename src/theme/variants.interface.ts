export const VariantButton = {
    Primary: "primary",
    Secondary: "secondary",
    Danger: "danger",
    Outline: "outline",
    Disable: "disable",
} as const

export const VariantLoading = {
    Primary: "primary",
    Secondary: "secondary",
} as const

export const VariantTypograph = {
    Header: "header",
    BigBold: "big/bold",
    LargeBold: "large/bold",
    NormalBold: "normal/bold",
    NormalRegular: "normal/regular",
    SmallBold: "small/bold",
    SmallRegular: "small/regular",
    SmallRegularUnderline: "small/regular/underline",
} as const


export type Variants = {
    button: typeof VariantButton[keyof typeof VariantButton];
    loading: typeof VariantLoading[keyof typeof VariantLoading];
    typograph: typeof VariantTypograph[keyof typeof VariantTypograph];
}
