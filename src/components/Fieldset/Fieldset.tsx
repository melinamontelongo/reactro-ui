import React from "react";
import {FieldsetProps, StyledFieldsetProps} from "./Fieldset.d";
import styled from "styled-components";
import { getBaseProperty, getVariantColor } from "../../utils/variants";

const StyledFieldset = styled.fieldset<StyledFieldsetProps>`
    border: ${(props) => getBaseProperty(props.theme, "borderInset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
    padding: 5px 10px;
    `
const Legend = styled.legend`
font-weight: bold;
font-size: 20px;
`
const Fieldset = ({children, legend, variant = "base"}:FieldsetProps) => {
    return(
        <StyledFieldset $variant={variant}>
            {legend && <Legend>{legend}</Legend>}
            {children}
        </StyledFieldset>
    )
}

export default Fieldset;