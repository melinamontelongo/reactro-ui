import React from "react";
import {FieldsetProps, StyledFieldsetProps} from "./Fieldset.d";
import styled from "styled-components";

const StyledFieldset = styled.fieldset<StyledFieldsetProps>`
    border: ${(props) => props.theme.borderInset} ${(props) => props.$primary ? props.theme.colors.primary.shadow : props.theme.colors.secondary.shadow};
    padding: 5px 10px;
    `
const Legend = styled.legend`
font-weight: bold;
font-size: 20px;
`
const Fieldset = ({children, legend, primary}:FieldsetProps) => {
    return(
        <StyledFieldset $primary={primary}>
            {legend && <Legend>{legend}</Legend>}
            {children}
        </StyledFieldset>
    )
}

export default Fieldset;