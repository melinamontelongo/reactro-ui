import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { FontFamily, TextTags } from "../ThemeProvider/ThemeProvider";

export interface TextProps extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
    text: string,
    tag?: TextTags,
    fontSize?: string,
    fontFamily?: FontFamily,
}

const StyledText = styled.div<Pick<TextProps, "fontSize" | "fontFamily">>`
    font-size: ${(props) => props.fontSize};
    font-family: ${(props) => props.fontFamily};
`
const Text = ({ text, tag = "p", fontSize = "1rem", fontFamily = "retro" }: TextProps) => {
    return (
        <StyledText as={tag} fontSize={fontSize} fontFamily={fontFamily}>
            {text}
        </StyledText>
    )
}

export default Text;