import React from "react";
import { RadioProps, StyledRadioProps } from "./Radio.d";
import styled from "styled-components";

const Label = styled.label<Pick<StyledRadioProps, "$primary">>`
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
    background-color: ${(props) => props.$primary ? props.theme.colors.primary.bg : props.theme.colors.secondary.bg};
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
    background: ${(props) => props.$primary ? props.theme.colors.primary.color : props.theme.colors.secondary.color};
}
`

const Input = styled.input`
position: absolute;
opacity: 0;
cursor: pointer;
height: 0;
width: 0;
`

const Checkmark = styled.span<Pick<StyledRadioProps, "$primary">>`
position: absolute;
top: 0;
left: 0;
height: 18px;
width: 18px;
border: ${(props) => props.theme.borderInset} ${(props) => props.$primary ? props.theme.colors.primary.shadow : props.theme.colors.secondary.shadow};
border-radius: 50%;
background-color: ${(props) => props.theme.colors.baseLighter};
&:after{
    content: "";
    position: absolute;
    display: none;
}
`
const Radio = ({ id, name, value, label, primary, defaultChecked }: RadioProps) => {
    return (
        <Label $primary={primary}>{label}
            <Input type="radio" id={id} name={name} value={value} defaultChecked={defaultChecked} />
            <Checkmark className="checkmark" $primary={primary} />
        </Label>
    )
}

export default Radio;