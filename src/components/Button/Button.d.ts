import { ButtonHTMLAttributes } from "react";
import { ComponentVariants } from "../../types/theme";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: ComponentVariants;
  size?: "sm" | "md" | "lg";
}

export interface StyledButtonProps extends Omit<ButtonProps, "variant"> {
  $variant?: ComponentVariants,
}