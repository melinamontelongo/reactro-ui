import React from "react";
import { InputProps, StyledInputProps } from "./Input.d";
import styled from "styled-components";
import { getBaseProperty, getVariantColor } from "../../utils/variants";

const Label = styled.label`
font-size: 15px;
display: flex;
flex-direction: column;
gap: 10px;
margin-bottom: 10px;
`
const StyledInput = styled.input<StyledInputProps>`
padding: 5px 10px;
background-color: ${(props) => getVariantColor(props.$variant!, props.theme, "activeBg")};
border: ${(props) => getBaseProperty(props.theme, "borderInset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
`
const Input = ({ type, label, id, defaultValue, variant, placeholder }: InputProps) => {
    return (<>
        {label ?
            <Label>{label}
                <StyledInput type={type} id={id} defaultValue={defaultValue} placeholder={placeholder} $variant={variant} />
            </Label>
            :
            <StyledInput type={type} id={id} defaultValue={defaultValue} placeholder={placeholder} $variant={variant} />
        }
    </>)
}

export default Input;