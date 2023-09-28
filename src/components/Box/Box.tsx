import React from "react";
import styled from "styled-components";
import { BoxProps, StyledBoxProps } from "./Box.d";
import { getBaseProperty, getVariantColor } from "../../utils/variants";

const StyledBox = styled.div<StyledBoxProps>`
width: ${(props) => props.$width};
height: ${(props) => props.$height};
background-color:  ${(props) => getVariantColor(props.$variant!, props.theme, "bg")};
border: ${(props) => getBaseProperty(props.theme, "borderOutset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
`
const Box = ({ children, width, height, variant = "default" }: BoxProps) => {
    return (
        <StyledBox $width={width} $height={height} $variant={variant}>
            {children}
        </StyledBox>
    )
}

export default Box;