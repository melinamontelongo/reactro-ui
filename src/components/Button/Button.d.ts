import { MouseEventHandler } from "react";
import { ComponentVariants } from "../../types/theme";

export interface ButtonProps {
  text?: string;
  type?: "button" | "submit" | "reset";
  variant?: ComponentVariants;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface StyledButtonProps extends Omit<ButtonProps, "variant">{
  $variant?: ComponentVariants,
}