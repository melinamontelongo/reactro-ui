import React from "react";
import styled from "styled-components";
import { getBaseProperty, getVariantColor } from "../../utils/variants";
import { ComponentVariants } from "../ThemeProvider/ThemeProvider";

export interface BoxProps {
    children: React.ReactNode,
    width?: string,
    height?: string,
    variant?: ComponentVariants,
}

export interface StyledBoxProps extends Pick<BoxProps, "children"> {
    $variant?: ComponentVariants,
    $width: string,
    $height: string,
}

const StyledBox = styled.div<StyledBoxProps>`
width: ${(props) => props.$width};
height: ${(props) => props.$height};
background-color:  ${(props) => getVariantColor(props.$variant!, props.theme, "bg")};
border: ${(props) => getBaseProperty(props.theme, "borderOutset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
overflow: auto;
&::-webkit-scrollbar {
    width: 15px;
}
&::-webkit-scrollbar-track {
    background: ${(props) => getVariantColor(props.$variant!, props.theme, "color")};
}
&::-webkit-scrollbar-thumb {
    background: ${(props) => getVariantColor(props.$variant!, props.theme, "bg")};
    border: ${(props) => getBaseProperty(props.theme, "borderOutset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")}
}
  
&::-webkit-scrollbar-thumb:hover {
    background: ${(props) => getVariantColor(props.$variant!, props.theme, "hoverBg")};
}
`
const Box = ({ children, width="fit-content", height="fit-content", variant = "default" }: BoxProps) => {
    return (
        <StyledBox $width={width} $height={height} $variant={variant}>
            {children}
        </StyledBox>
    )
}

export default Box;