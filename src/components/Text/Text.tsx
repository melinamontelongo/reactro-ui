import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.d";

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