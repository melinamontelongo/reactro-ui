import { ReactElement, ReactHTMLElement, SelectHTMLAttributes } from "react";
import { ComponentVariants } from "../../types/theme";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string,
    variant?: ComponentVariants,
    placeholder?: string,
    children: React.ReactNode,
}

export interface StyledSelectProps extends Omit<SelectProps, "variant"> {
    $variant?: ComponentVariants;
}