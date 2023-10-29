import React from "react";
import styled from "styled-components";
import { getBaseProperty, getVariantColor } from "../../utils/variants";
import { ComponentVariants } from "../ThemeProvider/ThemeProvider";

export interface CircleProps {
    children: React.ReactNode,
    width?: string,
    variant?: ComponentVariants,
}

export interface StyledCircleProps extends Pick<CircleProps, "children"> {
    $variant?: ComponentVariants,
    $width: string,
}

const StyledCircle = styled.div<StyledCircleProps>`
width: ${(props) => props.$width};
height: ${(props) => props.$width};
background-color:  ${(props) => getVariantColor(props.$variant!, props.theme, "bg")};
border: ${(props) => getBaseProperty(props.theme, "borderOutset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
border-radius: 100%;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
`
const Circle = ({ children, width="fit-content", variant = "default" }: CircleProps) => {
    return (
        <StyledCircle $width={width} $variant={variant}>
            {children}
        </StyledCircle>
    )
}

export default Circle;