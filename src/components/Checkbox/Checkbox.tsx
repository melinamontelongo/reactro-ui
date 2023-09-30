import React from "react";
import { CheckboxProps, StyledCheckboxProps } from "./Checkbox.d";
import styled from "styled-components";
import { getBaseProperty, getVariantColor } from "../../utils/variants";

const Label = styled.label<Pick<StyledCheckboxProps, "$variant">>`
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
    background-color:${(props) => getVariantColor(props.$variant!, props.theme, "bg")};
}
& input:checked ~ .checkmark:after{
    display: block;
}
& .checkmark:after{
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid ${(props) => getVariantColor(props.$variant!, props.theme, "color")};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
`

const Input = styled.input`
position: absolute;
opacity: 0;
cursor: pointer;
height: 0;
width: 0;
`

const Checkmark = styled.span<Pick<StyledCheckboxProps, "$variant">>`
position: absolute;
top: 0;
left: 0;
height: 18px;
width: 18px;
border: ${(props) => getBaseProperty(props.theme, "borderInset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
background-color: ${(props) => props.theme.colors.base.hoverBg};
&:after{
    content: "";
    position: absolute;
    display: none;
}
`

const Checkbox = ({ label, variant = "default", ...props }: CheckboxProps) => {
    return (
        <Label $variant={variant}>{label}
            <Input type="checkbox" {...props}/>
            <Checkmark className="checkmark" $variant={variant}/>
        </Label>
    )
};

export default Checkbox;