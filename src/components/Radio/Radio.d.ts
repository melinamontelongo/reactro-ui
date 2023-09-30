import { InputHTMLAttributes } from "react";
import { ComponentVariants } from "../../types/theme";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    variant?: ComponentVariants,
}

export interface StyledRadioProps extends Omit<RadioProps, "variant"> {
    $variant?: ComponentVariants;
}