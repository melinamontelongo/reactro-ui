import React from "react";
import { InputProps, StyledInputProps } from "./Input.d";
import styled from "styled-components";

const Label = styled.label`
font-size: 15px;
display: flex;
flex-direction: column;
gap: 10px;
margin-bottom: 10px;
`
const StyledInput = styled.input<StyledInputProps>`
padding: 5px 10px;
background-color: ${(props) => props.theme.colors.baseLighter};
border: ${(props) => props.theme.borderInset} ${(props) => props.$primary ? props.theme.colors.primary.shadow : props.theme.colors.secondary.shadow};
`
const Input = ({ type, label, id, defaultValue, primary, placeholder }: InputProps) => {
    return (<>
        {label ?
            <Label>{label}
                <StyledInput type={type} id={id} defaultValue={defaultValue} placeholder={placeholder} $primary={primary} />
            </Label>
            :
            <StyledInput type={type} id={id} defaultValue={defaultValue} placeholder={placeholder} $primary={primary} />
        }
    </>)
}

export default Input;