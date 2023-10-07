import { DefaultTheme } from "styled-components/dist/types";
import { ComponentVariants, Sizes } from "../types/theme";

export const getVariantColor = (variant: ComponentVariants, theme: DefaultTheme, property: keyof typeof theme.colors.base) => {
    if (property) {
        return theme.colors[variant][property];
    }
    return theme.colors[variant];
};

export const getBaseProperty = (theme: DefaultTheme, property: keyof typeof theme) => {
    return theme[property];
};

export const getVariantPadding = (size: Sizes) => {
    let sizes;
    switch (size) {
        case "sm":
            sizes = `
            padding: 7px 10px 8px;
            `
            break;
        case "md":
            sizes = `
            padding: 9px 25px 11px;
            `
            break;
        case "lg":
            sizes = `
                padding: 14px 30px 16px;
                `
            break;
    };
    return sizes;
};