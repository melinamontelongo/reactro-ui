import base from "./base";

const colors = {
    base: "#f5f3ab",
    primary: {
        bg: "#FFC4B5",
        color: "#ff474d",

        hoverBg: "#ffd0c4",
        hoverColor: "#ff545a",

        activeBg: "#f5b2a2",
        activeColor: "#d9363b",

        shadow: "#ff8c7d",
    },
    secondary: {
        bg: "#87FFA9",
        color: "#3BB35D",

        hoverBg: "#9cffb8",
        hoverColor: "#45c469",

        activeBg: "#74ed96",
        activeColor: "#319e50",

        shadow: "#5ac479",  
    }
};

const strawberries = {
    ...base,
    colors,
}

export default strawberries;