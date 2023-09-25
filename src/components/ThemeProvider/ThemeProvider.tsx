import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import themes from "./themes";

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