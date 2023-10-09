import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import themes from "./themes";

export type ComponentVariants = "primary" | "secondary" | "base" | "default";

export type ComponentVariantProps = {
    bg: string;
    color: string;
    hoverBg: string;
    hoverColor: string;
    activeBg: string;
    activeColor: string;
    shadow: string;
    placeholderColor?: string;
};

export type TextTags = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type FontFamily = "alkhemikal" | "retro" | "venice" | "bitcell" | "owre" | "edunline";

export type Sizes = "sm" | "md" | "lg";

export type ThemeProviderProps = {
    children: React.ReactNode,
    theme: keyof typeof themes;
};

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
    return (
        <SCThemeProvider theme={themes[theme]}>
            {children}
        </SCThemeProvider>
    )
}
ThemeProvider.defaultProps = {
    theme: "strawberries",
};
export default ThemeProvider;