import React from "react";
import styled from "styled-components";
import { ButtonProps, StyledButtonProps } from "./Button.d";

const getVariantStyles = (props) => {
    let styles;
    props.$primary ?
        styles = `
        color: ${props.theme.colors.primary.color};
        background-color:  ${props.theme.colors.primary.bg};
        border: 4px outset ${props.theme.colors.primary.shadow};
        &:hover {
            background-color:  ${props.theme.colors.primary.hoverBg};
            color:  ${props.theme.colors.primary.hoverColor};
        }
        &:active {
            background-color:  ${props.theme.colors.primary.activeBg};
            color:  ${props.theme.colors.primary.activeColor};
            border: 4px inset ${props.theme.colors.primary.shadow};
        }`
        :
        styles = `
        color: ${props.theme.colors.secondary.color};
        background-color:  ${props.theme.colors.secondary.bg};
        border: 4px outset ${props.theme.colors.secondary.shadow};
        &:hover {
            background-color:  ${props.theme.colors.secondary.hoverBg};
            color:  ${props.theme.colors.secondary.hoverColor};
        }
        &:active {
            background-color:  ${props.theme.colors.secondary.activeBg};
            color:  ${props.theme.colors.secondary.activeColor};
            border: 4px inset ${props.theme.colors.secondary.shadow};
        }`
    return styles;
}
const getVariantSize = (props) => {
    let sizes;
    switch (props.size) {
        case "sm":
            sizes = `
            padding: 7px 10px 8px;
            `
            break;
        case "md":
            sizes = `
            padding: 9px 25px 11px;
            `
            break;
        case "lg":
            sizes = `
                padding: 14px 30px 16px;
                `
            break
    }
    return sizes;
}
const StyledButton = styled.button<StyledButtonProps>`
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  display: inline-block;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  ${(props) => getVariantSize(props)}
    ${(props) => getVariantStyles(props)}
  }
`;

const Button = ({ size = "md", primary, disabled, text, onClick, ...props }: ButtonProps) => {
    return (
        <StyledButton
            type="button"
            onClick={onClick}
            $primary={primary}
            disabled={disabled}
            size={size}
            {...props}>
            {text}
        </StyledButton>
    );
}

export default Button;