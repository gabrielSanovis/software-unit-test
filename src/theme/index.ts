import { DefaultTheme } from 'styled-components/native';
import { colors } from './colors';
import { buttonPreAssembledStyles } from './assemblyLine/button';
import { loadingColor } from './assemblyLine/loading';
import { Variants } from './variants.interface';
import { typographPreAssembledStyles } from './assemblyLine/typograph';

const isWhiteSet = (variant: Variants["button"]) => {
    return variant === "primary" || variant === "danger";
}

const theme: DefaultTheme = {
    colors,
    buttonVariantAssemblyLine: {
        rootStyles(variant) {
            return buttonPreAssembledStyles(variant)
        },
        loadingVariant(variant) {
            if (isWhiteSet(variant)) return "primary"
            return "secondary"
        },
        typographVariant() {
            return "large/bold"
        },
        typographColor(variant) {
            if(isWhiteSet(variant)) return "white"
            return "blue_dark"
        }
    },
    loadingVariantAssemblyLine: {
        rootStyles(variant) {
            return loadingColor(variant)
        },
    },
    typographVariantAssemblyLine: {
        rootStyles(variant) {
            return typographPreAssembledStyles()[variant]
        },
    }
};




export { theme };