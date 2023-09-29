import { DefaultTheme } from "styled-components/dist/types";
import { ComponentVariantProps, ComponentVariants } from "../../../types/theme";
import base from "./base";

const colors: Record<ComponentVariants, ComponentVariantProps> = {
    base: {
        bg: "#312F3C",
        color: "#a7a6b3",

        hoverBg: "#474457",
        hoverColor: "#bcbbc9",

        activeBg: "#1b1a21",
        activeColor: "#91919c",

        shadow: "#3b3659",

        placeholderColor: "#6b6b73",
    },
    default: {
        bg: "#1A1A26",
        color: "#63637a",

        hoverBg: "#272738",
        hoverColor: "#74748f",

        activeBg: "#0e0e14",
        activeColor: "#515163",

        shadow: "#363659",

        placeholderColor: "",
    },
    primary: {
        bg: "#593C57",
        color: "#8c7a8b",

        hoverBg: "#6b4869",
        hoverColor: "#9e8a9d",

        activeBg: "#422d41",
        activeColor: "#756674",

        shadow: "#73406f",

        placeholderColor: "",
    },
    secondary: {
        bg: "#307567",
        color: "#74ada2",

        hoverBg: "#3b8f7e",
        hoverColor: "#82c2b5",

        activeBg: "#265c51",
        activeColor: "#619188",

        shadow: "#298774",

        placeholderColor: "",
    }
};

const pigeon: DefaultTheme = {
    ...base,
    colors,
}

export default pigeon;