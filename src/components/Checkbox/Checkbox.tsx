import React from "react";
import { CheckboxProps } from "./Checkbox.d";
import styled from "styled-components";

const Label = styled.label<Pick<CheckboxProps, "$primary">>`
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
    background-color: ${(props) => props.theme.colors.baseDarker}
}
& input:checked ~ .checkmark {
    background-color: ${(props) => props.$primary ? props.theme.colors.primary.bg : props.theme.colors.secondary.bg };
}
& input:checked ~ .checkmark:after{
    display: block;
}
& .checkmark:after{
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid ${(props) => props.$primary ? props.theme.colors.primary.color : props.theme.colors.secondary.color};
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

const Checkmark = styled.span<Pick<CheckboxProps, "$primary">>`
position: absolute;
top: 0;
left: 0;
height: 18px;
width: 18px;
border: ${(props) => props.theme.borderInset} ${(props) => props.$primary ? props.theme.colors.primary.shadow : props.theme.colors.secondary.shadow};
background-color: ${(props) => props.theme.colors.baseLighter};
&:after{
    content: "";
    position: absolute;
    display: none;
}
`

const Checkbox = ({ id, value, label, $primary, checked }: CheckboxProps) => {
    return (
        <Label $primary={$primary}>{label}
            <Input type="checkbox" id={id} value={value} checked={checked}/>
            <Checkmark className="checkmark" $primary={$primary}/>
        </Label>
    )
};

export default Checkbox;