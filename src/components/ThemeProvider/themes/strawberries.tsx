import { DefaultTheme } from "styled-components/dist/types";
import { ComponentVariantProps, ComponentVariants } from "../../../types/theme";
import base from "./base";

const colors: Record<ComponentVariants, ComponentVariantProps> = {
    base: {
        bg: "#f5f3ab",
        color: "#1f1e15",

        hoverBg: "#fffed1",
        hoverColor: "#2b2b22",

        activeBg: "#c2c082",
        activeColor: "#1c1c12",

        shadow: "#d9d791",
    },
    default: {
        bg: "#FFC4B5",
        color: "#ff474d",

        hoverBg: "#ffd0c4",
        hoverColor: "#ff545a",

        activeBg: "#f5b2a2",
        activeColor: "#d9363b",

        shadow: "#ff8c7d",
    },
    primary: {
        bg: "#87FFA9",
        color: "#3BB35D",

        hoverBg: "#9cffb8",
        hoverColor: "#45c469",

        activeBg: "#74ed96",
        activeColor: "#319e50",

        shadow: "#5ac479",
    },
    secondary: {
        bg: "#ffeb87",
        color: "#b39f3b",

        hoverBg: "#ffee99",
        hoverColor: "#c9b44b",

        activeBg: "#e0cd6e",
        activeColor: "#8c7b27",

        shadow: "#c4aa5a",
    }
};

const strawberries: DefaultTheme = {
    ...base,
    colors,
}

export default strawberries;