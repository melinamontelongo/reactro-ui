import { DefaultTheme } from "styled-components/dist/types";
import { ComponentVariants } from "../types/theme";

export const getVariantColor = (variant: ComponentVariants, theme: DefaultTheme, property: keyof typeof theme.colors.base) => {
    if (property) {
        return theme.colors[variant][property];
    }
    return theme.colors[variant];
};

export const getBaseProperty = (theme: DefaultTheme, property: keyof typeof theme) => {
    return theme[property];
}