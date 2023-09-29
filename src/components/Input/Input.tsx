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
background-color: ${(props) => props.theme.colors.base.hoverBg};
color: ${(props) => props.theme.colors.base.color};
opacity: ${(props) => (props.disabled ? 0.5 : 1)};
cursor: ${(props) => props.disabled ? "not-allowed" : "auto"};
&::placeholder{
    color:  ${(props) => props.theme.colors.base.placeholderColor};
}
border: ${(props) => getBaseProperty(props.theme, "borderInset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
`
const Input = ({ type, name, label, id, defaultValue, variant = "default", placeholder, onChange, value, readonly = false, disabled = false }: InputProps) => {
    return (<>
        {label ?
            <Label>{label}
                <StyledInput type={type} id={id} name={name} defaultValue={defaultValue} placeholder={placeholder} $variant={variant} value={value} onChange={onChange ? onChange : undefined} readOnly={readonly} disabled={disabled}/>
            </Label>
            :
            <StyledInput type={type} id={id} name={name} defaultValue={defaultValue} placeholder={placeholder} $variant={variant} value={value} onChange={onChange ? onChange : undefined} readOnly={readonly} disabled={disabled}/>
        }
    </>)
}

export default Input;