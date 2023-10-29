import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { FontFamily, TextTags } from "../ThemeProvider/ThemeProvider";

export interface TextProps extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
    children: string,
    tag?: TextTags,
    fontSize?: string,
    fontFamily?: FontFamily,
    align?: "start" | "end" | "center" | "left" | "right"
}

const StyledText = styled.div<Pick<TextProps, "fontSize" | "fontFamily" | "align">>`
    font-size: ${(props) => props.fontSize};
    font-family: ${(props) => props.fontFamily};
    text-align: ${(props) => props.align};
`
const Text = ({ children, tag = "p", fontSize = "1rem", fontFamily = "retro", align = "left" }: TextProps) => {
    return (
        <StyledText as={tag} fontSize={fontSize} fontFamily={fontFamily} align={align}>
            {children}
        </StyledText>
    )
}

export default Text;