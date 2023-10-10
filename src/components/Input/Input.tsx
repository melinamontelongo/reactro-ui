import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { getBaseProperty, getVariantColor } from "../../utils/variants";
import { ComponentVariants } from "../ThemeProvider/ThemeProvider";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: "text" | "password" | "email" | "tel" | "number" | "url",
    label?: string,
    variant?: ComponentVariants,
}

export interface StyledInputProps extends Omit<InputProps, "variant"> {
    $variant?: ComponentVariants;
}

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
border: ${(props) => getBaseProperty(props.theme, "borderOutset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
&:focus-visible{
    outline: none;
    box-shadow: none;
    border: ${(props) => getBaseProperty(props.theme, "borderInset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
}
`
const Input = ({ type, variant = "default", label, ...props }: InputProps) => {
    return (<>
        {label ?
            <Label>{label}
                <StyledInput type={type} $variant={variant} {...props} />
            </Label>
            :
            <StyledInput type={type} $variant={variant} {...props} />
        }
    </>)
}

export default Input;