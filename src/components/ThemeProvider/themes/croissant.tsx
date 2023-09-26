import base from "./base";

const colors = {
    base: "#D2CC78",
    baseLighter: "#faf5b1",
    baseDarker: "#b3ad60",
    primary: {
        bg: "#F1A23E",
        color: "#A6270A",

        hoverBg: "#f7aa48",
        hoverColor: "#b52f10",

        activeBg: "#e09434",
        activeColor: "#912006",

        shadow: "#BF3803",
    },
    secondary: {
        bg: "#F2DA91",
        color: "#cc7125",

        hoverBg: "#fce6a2",
        hoverColor: "#de7e2f",

        activeBg: "#e3cb81",
        activeColor: "#b5611b",

        shadow: "#F18429",
    },
};

const croissant = {
    ...base,
    colors,
}

export default croissant;