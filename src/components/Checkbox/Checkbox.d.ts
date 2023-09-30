import { InputHTMLAttributes } from "react";
import { ComponentVariants } from "../../types/theme";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string,
    variant?: ComponentVariants,
}

export interface StyledCheckboxProps extends Omit<CheckboxProps, "variant"> {
    $variant?: ComponentVariants,
}