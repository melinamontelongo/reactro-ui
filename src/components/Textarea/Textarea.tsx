import React, { TextareaHTMLAttributes } from "react";
import styled from "styled-components";
import { getBaseProperty, getVariantColor } from "../../utils/variants";
import { ComponentVariants } from "../ThemeProvider/ThemeProvider";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string,
    variant?: ComponentVariants,
    resize?: "both" | "horizontal" | "vertical" | "none",
}

export interface StyledTextareaProps extends Omit<TextareaProps, "variant" | "resize"> {
    $variant?: ComponentVariants,
    $resize?: "both" | "horizontal" | "vertical" | "none",
}

const Label = styled.label`
font-size: 15px;
display: flex;
flex-direction: column;
gap: 10px;
margin-bottom: 10px;
`
const StyledTextarea = styled.textarea<StyledTextareaProps>`
padding: 5px 10px;
background-color: ${(props) => props.theme.colors.base.hoverBg};
color: ${(props) => props.theme.colors.base.color};
resize: ${(props) => props.$resize};
&:focus{
    outline: none;
    box-shadow: none;
    border: ${(props) => getBaseProperty(props.theme, "borderInset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
}
&::placeholder{
    color:  ${(props) => props.theme.colors.base.placeholderColor};
}
border: ${(props) => getBaseProperty(props.theme, "borderOutset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
&::-webkit-scrollbar {
    width: 15px;
}
&::-webkit-scrollbar-track {
    background: ${(props) => getVariantColor(props.$variant!, props.theme, "color")};
}
&::-webkit-scrollbar-thumb {
    background: ${(props) => getVariantColor(props.$variant!, props.theme, "bg")};
    border: ${(props) => getBaseProperty(props.theme, "borderOutset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")}
}
  
&::-webkit-scrollbar-thumb:hover {
    background: ${(props) => getVariantColor(props.$variant!, props.theme, "hoverBg")};
}
`
const Textarea = ({ label, variant = "default", resize = "both", ...props }: TextareaProps) => {
    return (<>
        {label ?
            <Label>{label}
                <StyledTextarea $variant={variant} $resize={resize} {...props} />
            </Label>
            :
            <StyledTextarea $variant={variant} $resize={resize} {...props} />
        }
    </>)
}

export default Textarea;