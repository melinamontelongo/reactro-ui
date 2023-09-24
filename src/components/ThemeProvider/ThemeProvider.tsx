import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import themes from "./themes";

export type ThemeProviderProps = {
    children: React.ReactNode,
    theme: keyof typeof themes;
};

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
    console.log("THEME",theme)
    return (
        <SCThemeProvider theme={themes[theme || "strawberries"]}>
            {children}
        </SCThemeProvider>
    )
}
ThemeProvider.defaultProps = {
    theme: "strawberries",
};
export default ThemeProvider;