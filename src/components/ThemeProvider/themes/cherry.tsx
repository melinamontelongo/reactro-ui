import { DefaultTheme } from "styled-components/dist/types";
import { ComponentVariantProps, ComponentVariants } from "../../../types/theme";
import base from "./base";

const colors: Record<ComponentVariants, ComponentVariantProps> = {
    base: {
        bg: "#F2B3CA",
        color: "#21191c",

        hoverBg: "#ffc4da",
        hoverColor: "#36292e",

        activeBg: "#d49db1",
        activeColor: "#120d0f",

        shadow: "#db95af",

        placeholderColor: "#8f6a77",
    },
    default: {
        bg: "#F2668B",
        color: "#782037",

        hoverBg: "#ff7d9f",
        hoverColor: "#912743",

        activeBg: "#d15676",
        activeColor: "#5c192a",

        shadow: "#e3547a",

        placeholderColor: "",
    },
    primary: {
        bg: "#e34958",
        color: "#541a20",

        hoverBg: "#ff5c6c",
        hoverColor: "#70242b",

        activeBg: "#c43f4c",
        activeColor: "#361014",

        shadow: "#c73240",

        placeholderColor: "",
    },
    secondary: {
        bg: "#ba2328",
        color: "#400b0d",

        hoverBg: "#d43136",
        hoverColor: "#5c1012",

        activeBg: "#9c1e22",
        activeColor: "#260708",

        shadow: "#a3151a",

        placeholderColor: "",
    }
};

const cherry: DefaultTheme = {
    ...base,
    colors,
}

export default cherry;