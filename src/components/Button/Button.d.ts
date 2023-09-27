import { MouseEventHandler } from "react";

export interface ButtonProps {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface StyledButtonProps extends Pick<ButtonProps, "text" | "disabled" | "onClick" | "size">{
  $primary?: boolean,
}