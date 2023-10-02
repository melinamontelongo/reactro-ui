import React from "react";
import styled from "styled-components";
import { ButtonProps, StyledButtonProps } from "./Button.d";
import { getBaseProperty, getVariantColor, getVariantSize } from "../../utils/variants";
import { Sizes } from "../../types/theme";

const StyledButton = styled.button<StyledButtonProps>`
  line-height: 1;
  font-size: 15px;
  cursor: ${(props) => props.disabled ? "not-allowed" : "pointer"};
  font-weight: 700;
  font-weight: bold;
  display: inline-block;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  ${(props) => getVariantSize(props.size as Sizes)}
  color: ${(props) => getVariantColor(props.$variant!, props.theme, "color")};
  background-color:  ${(props) => getVariantColor(props.$variant!, props.theme, "bg")};
  border: ${(props) => getBaseProperty(props.theme, "borderOutset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
  &:hover {
      background-color: ${(props) => !props.disabled && getVariantColor(props.$variant!, props.theme, "hoverBg")};
      color: ${(props) => !props.disabled && getVariantColor(props.$variant!, props.theme, "hoverColor")};
  }
  &:active {
      background-color:  ${(props) => !props.disabled && getVariantColor(props.$variant!, props.theme, "activeBg")};
      color:  ${(props) => !props.disabled && getVariantColor(props.$variant!, props.theme, "activeColor")};
      border: ${(props) => !props.disabled && getBaseProperty(props.theme, "borderInset")} ${(props) => !props.disabled && getVariantColor(props.$variant!, props.theme, "shadow")};
  }`
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