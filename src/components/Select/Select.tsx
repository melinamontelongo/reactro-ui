import React, { SelectHTMLAttributes } from "react";
import styled from "styled-components";
import { getBaseProperty, getVariantColor } from "../../utils/variants";
import { ComponentVariants } from "../ThemeProvider/ThemeProvider";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string,
    variant?: ComponentVariants,
    placeholder?: string,
    children: React.ReactNode,
}

export interface StyledSelectProps extends Omit<SelectProps, "variant"> {
    $variant?: ComponentVariants;
}

const Label = styled.label`
font-size: 15px;
display: flex;
flex-direction: column;
gap: 10px;
margin-bottom: 10px;
`
const StyledSelect = styled.select<StyledSelectProps>`
padding: 5px 10px;
background-color: ${(props) => props.theme.colors.base.hoverBg};
color: ${(props) => props.theme.colors.base.color};
opacity: ${(props) => (props.disabled ? 0.5 : 1)};
cursor: ${(props) => props.disabled ? "not-allowed" : "auto"};
.placeholder-option{
    color:  ${(props) => props.theme.colors.base.placeholderColor};
}
& option:checked{
    color: ${(props) => props.theme.colors.base.bg};
    background: ${(props) => props.theme.colors.base.color};
}
border: ${(props) => getBaseProperty(props.theme, "borderOutset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
&:focus-visible{
    outline: none;
    box-shadow: none;
    border: ${(props) => getBaseProperty(props.theme, "borderInset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
}
`
const Select = ({ variant = "default", label, placeholder, children, ...props }: SelectProps) => {
    return (<>
        {label ?
            <Label>{label}
                <StyledSelect $variant={variant} {...props}>
                    {placeholder && <option value="" disabled className="placeholder-option">{placeholder}</option>}
                    {children}
                </StyledSelect>
            </Label>
            :
            <StyledSelect $variant={variant} {...props}>
                {placeholder && <option value="" disabled className="placeholder-option">{placeholder}</option>}
                {children}
            </StyledSelect>
        }
    </>)
}

export default Select;