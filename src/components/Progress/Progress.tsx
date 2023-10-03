import React from "react";
import { ProgressProps, StyledProgressProps } from "./Progress.d";
import styled from "styled-components";
import { getBaseProperty, getVariantColor } from "../../utils/variants";

const Container = styled.div<StyledProgressProps>`
height: 3rem;
width: 100%;
background-color: ${(props) => getVariantColor(props.$variant, props.theme, "hoverColor")};
border: ${(props) => getBaseProperty(props.theme, "borderOutset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Bar = styled.div<StyledProgressProps>`
    width: ${(props) => props.$percent}%;
    height: 100%;
    background-color: ${(props) => getVariantColor(props.$variant, props.theme, "bg")};
    align-self: start;
    `
const Value = styled.div<StyledProgressProps>`
    position: absolute;
    color: ${(props) => getVariantColor(props.$variant, props.theme, "activeColor")};
    align-self: center;
`
const Progress = ({ percent = 75, variant = "default" }: ProgressProps) => {
    return (
        <Container $variant={variant} $percent={percent}>
            <Value $variant={variant} $percent={percent}>{percent}%</Value>
            <Bar $variant={variant} $percent={percent} />
        </Container>
    )
}

export default Progress;