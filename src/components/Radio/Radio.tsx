import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { getBaseProperty, getVariantColor } from "../../utils/variants";
import { ComponentVariants } from "../ThemeProvider/ThemeProvider";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    variant?: ComponentVariants,
}

export interface StyledRadioProps extends Omit<RadioProps, "variant"> {
    $variant?: ComponentVariants;
}

const Label = styled.label<Pick<StyledRadioProps, "$variant">>`
display: block;
position: relative;
padding-top: 3px;
padding-left: 35px;
margin-bottom: 12px;
cursor: pointer;
font-size: 15px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
&:hover input ~ .checkmark{
    background-color: ${(props) => props.theme.colors.base.shadow};
}
& input:checked ~ .checkmark {
    background-color: ${(props) => getVariantColor(props.$variant!, props.theme, "bg")};
}
& input:checked ~ .checkmark:after{
    display: block;
}
& .checkmark:after{
    top: 5px;
    left: 5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) => getVariantColor(props.$variant!, props.theme, "color")};
}
`

const Input = styled.input`
position: absolute;
opacity: 0;
cursor: pointer;
height: 0;
width: 0;
`

const Checkmark = styled.span<Pick<StyledRadioProps, "$variant">>`
position: absolute;
top: 0;
left: 0;
height: 18px;
width: 18px;
border: ${(props) => getBaseProperty(props.theme, "borderInset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
border-radius: 50%;
background-color: ${(props) => props.theme.colors.base.hoverBg};
&:after{
    content: "";
    position: absolute;
    display: none;
}
`
const Radio = ({ label, variant = "default", ...props }: RadioProps) => {
    return (
        <Label $variant={variant}>{label}
            <Input type="radio" {...props} />
            <Checkmark className="checkmark" $variant={variant} />
        </Label>
    )
}

export default Radio;