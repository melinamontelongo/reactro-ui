import React from "react";
import { TextareaProps, StyledTextareaProps } from "./Textarea.d";
import styled from "styled-components";
import { getBaseProperty, getVariantColor } from "../../utils/variants";

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
&::placeholder{
    color:  ${(props) => props.theme.colors.base.placeholderColor};
}
border: ${(props) => getBaseProperty(props.theme, "borderInset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
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