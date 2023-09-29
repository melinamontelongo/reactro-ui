import { DefaultTheme } from "styled-components/dist/types";
import { ComponentVariantProps, ComponentVariants } from "../../../types/theme";
import base from "./base";

const colors: Record<ComponentVariants, ComponentVariantProps> = {
    base: {
        bg: "#CCC2F2",
        color: "#363340",

        hoverBg: "#dcd4fa",
        hoverColor: "#524e61",

        activeBg: "#b2a9d4",
        activeColor: "#201f26",

        shadow: "#9183c7",
    },
    default: {
        bg: "#d6b6f0",
        color: "#504757",

        hoverBg: "#e7c9ff",
        hoverColor: "#655a6e",

        activeBg: "#bda1d4",
        activeColor: "#38323d",

        shadow: "#ad7dd4",
    },
    primary: {
        bg: "#BAA0F2",
        color: "#534473",

        hoverBg: "#c6abff",
        hoverColor: "#65538c",

        activeBg: "#a58dd9",
        activeColor: "#42365c",

        shadow: "#9879d9",
    },
    secondary: {
        bg: "#B3BF56",
        color: "#383b24",

        hoverBg: "#c9d660",
        hoverColor: "#41472a",

        activeBg: "#99a349",
        activeColor: "#222416",

        shadow: "#8f9c2c",
    },
};

const lavender:DefaultTheme = {
    ...base,
    colors,
}

export default lavender;