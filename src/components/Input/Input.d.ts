import { InputHTMLAttributes } from "react";
import { ComponentVariants } from "../../types/theme";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: "text" | "password" | "email" | "tel" | "number" | "url",
    label?: string,
    variant?: ComponentVariants,
}

export interface StyledInputProps extends Omit<InputProps, "variant"> {
    $variant?: ComponentVariants;
}