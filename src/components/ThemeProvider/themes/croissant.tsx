import { DefaultTheme } from "styled-components/dist/types";
import { ComponentVariantProps, ComponentVariants } from "../../../types/theme";
import base from "./base";

const colors: Record<ComponentVariants, ComponentVariantProps> = {
    base: {
        bg: "#D2CC78",
        color: "#1f1e11",

        hoverBg: "#e3dd88",
        hoverColor: "#47452a",

        activeBg: "#bdb766",
        activeColor: "#14140a",

        shadow: "#b3ad60",
    },
    default: {
        bg: "#F1A23E",
        color: "#A6270A",

        hoverBg: "#f7aa48",
        hoverColor: "#b52f10",

        activeBg: "#e09434",
        activeColor: "#912006",

        shadow: "#BF3803",
    },
    primary: {
        bg: "#c94f08",
        color: "#4d1e03",

        hoverBg: "#d6580f",
        hoverColor: "#6b2a04",

        activeBg: "#ad4407",
        activeColor: "#2e1202",

        shadow: "#803205",
    },
    secondary: {
        bg: "#5c2303",
        color: "#c94f08",

        hoverBg: "#6e2a03",
        hoverColor: "#db5609",

        activeBg: "#451b03",
        activeColor: "#b04507",

        shadow: "#e65602",
    },
};

const croissant:DefaultTheme = {
    ...base,
    colors,
}

export default croissant;