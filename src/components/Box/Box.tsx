import React from "react";
import styled from "styled-components";
import { BoxProps } from "./Box.d";

const StyledBox = styled.div<BoxProps>`
width: ${(props) => props.width};
height: ${(props) => props.height};
background-color:  ${(props) => props.$primary ? props.theme.colors.primary.bg : props.theme.colors.secondary.bg};
border: ${(props) => props.theme.borderOutset} ${(props) => props.$primary ? props.theme.colors.primary.shadow : props.theme.colors.secondary.shadow};
`
const Box = ({ children, width, height, $primary }: BoxProps) => {
    return (
        <StyledBox width={width} height={height} $primary={$primary}>
            {children}
        </StyledBox>
    )
}

export default Box;