import React, { DetailsHTMLAttributes } from "react";
import styled from "styled-components";
import { getBaseProperty, getVariantColor, getVariantPadding } from "../../utils/variants";
import { ComponentVariants, Sizes } from "../ThemeProvider/ThemeProvider";

export interface AccordionProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
    text?: string;
    variant?: ComponentVariants;
    size?: Sizes;
    width?: string;
    children?: React.ReactNode,
}

export interface StyledAccordionProps extends Omit<AccordionProps, "variant" | "width"> {
    $variant?: ComponentVariants;
    $width?: string;
}

export const AccordionContainer = styled.details<StyledAccordionProps>`
background-color: ${(props) => getVariantColor(props.$variant!, props.theme, "bg")};
border: ${(props) => getBaseProperty(props.theme, "borderOutset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
width: ${(props) => props.$width};
& summary:active{
    outline: none;
    background-color:  ${(props) => getVariantColor(props.$variant!, props.theme, "activeBg")};
    color:  ${(props) => getVariantColor(props.$variant!, props.theme, "activeColor")};
}
& summary:focus-visible{
    outline: none;
    box-shadow: none;
    text-decoration: underline 2px ${(props) => getVariantColor(props.$variant!, props.theme, "color")};
    text-underline-offset: 2px;
}
& > summary:after{
    content: '+';
    float: right;
}
&[open] > summary:after{
    content: '-';
}
`

export const AccordionButton = styled.summary<StyledAccordionProps>`
line-height: 1;
font-size: 15px;
font-weight: 700;
font-weight: bold;
list-style: none;
${(props) => getVariantPadding(props.size as Sizes)}
color: ${(props) => getVariantColor(props.$variant!, props.theme, "color")};
&:hover{
    background-color: ${(props) => getVariantColor(props.$variant!, props.theme, "hoverBg")};
    color: ${(props) => getVariantColor(props.$variant!, props.theme, "hoverColor")};
    cursor: pointer;
}
`

export const AccordionPanel = styled.div<StyledAccordionProps>`
${(props) => getVariantPadding(props.size as Sizes)}
`
const Accordion = ({ text, variant = "default", size = "md", width="100%", children, ...props }: AccordionProps) => {

    return (
        <AccordionContainer $variant={variant} {...props} $width={width}>
            <AccordionButton $variant={variant} size={size}>{text}</AccordionButton>
            <AccordionPanel size={size}>
                {children}
            </AccordionPanel>
        </AccordionContainer>
    )
}

export default Accordion;