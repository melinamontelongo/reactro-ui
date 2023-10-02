import { ButtonHTMLAttributes } from "react";
import { ComponentVariants, Sizes } from "../../types/theme";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: ComponentVariants;
  size?: Sizes,
}

export interface StyledButtonProps extends Omit<ButtonProps, "variant"> {
  $variant?: ComponentVariants,
}