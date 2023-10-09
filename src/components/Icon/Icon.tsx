import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { ComponentVariants, Sizes } from "../ThemeProvider/ThemeProvider";
import { getVariantColor } from "../../utils/variants";

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
    text: string,
    icon: React.ReactNode,
    size?: Sizes,
    variant?: ComponentVariants,
}

export interface StyledIconProps extends Omit<IconProps, "size" | "variant"> {
    $size: Sizes,
    $variant: ComponentVariants,
}

const getIconSize = (size: Sizes) => {
    switch (size) {
        case "sm":
            return "30px";
        case "md":
            return "50px";
        case "lg":
            return "70px";
    };
};

const getTextSize = (size: Sizes) => {
    switch (size) {
        case "sm":
            return "12px";
        case "md":
            return "15px";
        case "lg":
            return "18px";
    };
};

const IconContainer = styled.div<Pick<StyledIconProps, "$size" | "$variant">>`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
width: fit-content;
height: fit-content;
cursor: pointer;
user-select: none;
outline: none;
&:focus > *{
    background-color: ${(props) => getVariantColor(props.$variant, props.theme, "hoverBg")};
    color: ${(props) => getVariantColor(props.$variant, props.theme, "hoverColor")};
    outline: 4px outset ${(props) => getVariantColor(props.$variant, props.theme, "shadow")};
}
&:active > *{
    background-color: ${(props) => getVariantColor(props.$variant, props.theme, "activeBg")};
    color: ${(props) => getVariantColor(props.$variant, props.theme, "activeColor")};
    outline: 4px inset ${(props) => getVariantColor(props.$variant, props.theme, "shadow")};
}
`
const StyledIcon = styled.div<Pick<StyledIconProps, "$size" | "$variant">>`
padding: 2px 5px;
& > * {
    width: ${(props) => getIconSize(props.$size)};
    height: ${(props) => getIconSize(props.$size)};
    object-fit: cover;
}
`
const StyledText = styled.div<Pick<StyledIconProps, "$size" | "$variant">>`
font-size: ${(props) => getTextSize(props.$size)};
padding: 2px 5px;
text-align: center;
text-wrap: wrap;
`
const Icon = ({ text, icon, size = "md", variant = "default", ...props }: IconProps) => {
    return (
        <IconContainer {...props} $size={size} $variant={variant} tabIndex={0}>
            <StyledIcon $size={size} $variant={variant}>
                {icon}
            </StyledIcon>
            <StyledText $size={size} $variant={variant}>
                {text}
            </StyledText>
        </IconContainer>
    )
}

export default Icon;