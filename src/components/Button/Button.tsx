import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { getBaseProperty, getVariantColor, getVariantPadding } from "../../utils/variants";
import { ComponentVariants, Sizes } from "../ThemeProvider/ThemeProvider";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    variant?: ComponentVariants;
    size?: Sizes,
}

export interface StyledButtonProps extends Omit<ButtonProps, "variant"> {
    $variant?: ComponentVariants,
}

const StyledButton = styled.button<StyledButtonProps>`
  line-height: 1;
  font-size: 15px;
  cursor: ${(props) => props.disabled ? "not-allowed" : "pointer"};
  font-weight: 700;
  font-weight: bold;
  display: inline-block;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  ${(props) => getVariantPadding(props.size as Sizes)}
  color: ${(props) => getVariantColor(props.$variant!, props.theme, "color")};
  background-color:  ${(props) => getVariantColor(props.$variant!, props.theme, "bg")};
  border: ${(props) => getBaseProperty(props.theme, "borderOutset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
  &:hover {
      background-color: ${(props) => !props.disabled && getVariantColor(props.$variant!, props.theme, "hoverBg")};
      color: ${(props) => !props.disabled && getVariantColor(props.$variant!, props.theme, "hoverColor")};
  }
  &:active{
      background-color:  ${(props) => !props.disabled && getVariantColor(props.$variant!, props.theme, "activeBg")};
      color:  ${(props) => !props.disabled && getVariantColor(props.$variant!, props.theme, "activeColor")};
      border: ${(props) => !props.disabled && getBaseProperty(props.theme, "borderInset")} ${(props) => !props.disabled && getVariantColor(props.$variant!, props.theme, "shadow")};
  }
  &:focus-visible{
    outline: none;
    box-shadow: none;
    text-decoration: underline 2px ${(props) => getVariantColor(props.$variant!, props.theme, "color")};
    text-underline-offset: 2px;
  }
  `
    ;

const Button = ({ size = "md", variant = "default", text, ...props }: ButtonProps) => {
    return (
        <StyledButton
            $variant={variant}
            size={size}
            {...props}>
            {text}
        </StyledButton>
    );
}

export default Button;