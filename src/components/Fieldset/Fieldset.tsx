import React from "react";
import styled from "styled-components";
import { getBaseProperty, getVariantColor } from "../../utils/variants";
import { ComponentVariants } from "../ThemeProvider/ThemeProvider";

export interface FieldsetProps {
    children: React.ReactNode,
    variant?: ComponentVariants,
    legend?: string,
}

export interface StyledFieldsetProps extends Omit<FieldsetProps, "variant"> {
    $variant?: ComponentVariants,
}

const StyledFieldset = styled.fieldset<StyledFieldsetProps>`
    border: ${(props) => getBaseProperty(props.theme, "borderInset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
    padding: 5px 10px;
    `
const Legend = styled.legend`
font-weight: bold;
font-size: 20px;
`
const Fieldset = ({ children, legend, variant = "default" }: FieldsetProps) => {
    return (
        <StyledFieldset $variant={variant}>
            {legend && <Legend>{legend}</Legend>}
            {children}
        </StyledFieldset>
    )
}

export default Fieldset;