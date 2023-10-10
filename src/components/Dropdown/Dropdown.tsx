import React, { DetailsHTMLAttributes } from "react";
import styled from "styled-components";
import { getBaseProperty, getVariantColor, getVariantPadding } from "../../utils/variants";
import { ComponentVariants, Sizes } from "../ThemeProvider/ThemeProvider";

export interface DropdownProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
    text?: string;
    variant?: ComponentVariants;
    size?: Sizes;
    isList?: boolean;
    children?: React.ReactNode,
}

export interface StyledDropdownProps extends Omit<DropdownProps, "variant"> {
    $variant?: ComponentVariants,
}

const Details = styled.details`

`

const Summary = styled.summary<StyledDropdownProps>`
width: max-content;
line-height: 1;
font-size: 15px;
font-weight: 700;
font-weight: bold;
${(props) => getVariantPadding(props.size as Sizes)}
color: ${(props) => getVariantColor(props.$variant!, props.theme, "color")};
background-color:  ${(props) => getVariantColor(props.$variant!, props.theme, "bg")};
border: ${(props) => getBaseProperty(props.theme, "borderOutset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
&:hover{
    background-color: ${(props) => getVariantColor(props.$variant!, props.theme, "hoverBg")};
    color: ${(props) => getVariantColor(props.$variant!, props.theme, "hoverColor")};
}
&:active{
    outline: none;
    background-color:  ${(props) => getVariantColor(props.$variant!, props.theme, "activeBg")};
    color:  ${(props) => getVariantColor(props.$variant!, props.theme, "activeColor")};
    border: ${(props) => getBaseProperty(props.theme, "borderInset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
}
&:focus-visible{
    outline: none;
    box-shadow: none;
    text-decoration: underline 2px ${(props) => getVariantColor(props.$variant!, props.theme, "color")};
    text-underline-offset: 2px;
}
`

const Container = styled.div<StyledDropdownProps>`
width: max-content;
min-width: 10rem;
max-width: 25rem;
background-color:  ${(props) => getVariantColor(props.$variant!, props.theme, "bg")};
border: ${(props) => getBaseProperty(props.theme, "borderInset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
display: flex;
flex-direction: column;
justify-content: center;
flex-wrap: wrap;
padding: 5px;
gap: 2px;
margin-top: 5px;
position: absolute;
`
const List = styled.ul<StyledDropdownProps>`
width: max-content;
min-width: 10rem;
max-width: 25rem;
background-color:  ${(props) => getVariantColor(props.$variant!, props.theme, "bg")};
border: ${(props) => getBaseProperty(props.theme, "borderInset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
display: flex;
flex-direction: column;
justify-content: center;
flex-wrap: wrap;
gap: 2px;
padding: 0;
margin-top: 5px;
& > * {
    padding: 5px 10px;
    list-style: none;
    cursor: pointer;
}
& > *:hover{
    background-color:  ${(props) => getVariantColor(props.$variant!, props.theme, "color")};
    color:  ${(props) => getVariantColor(props.$variant!, props.theme, "bg")};
}
position: absolute;
`
const Dropdown = ({ text, variant = "default", size = "md", isList = true, children, ...props }: DropdownProps) => {
    return (
        <Details {...props}>
            <Summary $variant={variant} size={size}>{text}</Summary>
            {isList ?
                <List $variant={variant}>
                    {children}
                </List>
                :
                <Container $variant={variant}>
                    {children}
                </Container>
            }

        </Details>
    )
}

export default Dropdown;