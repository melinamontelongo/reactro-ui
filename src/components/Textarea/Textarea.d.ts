import { TextareaHTMLAttributes } from "react";
import { ComponentVariants } from "../../types/theme";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string,
    variant?: ComponentVariants,
    resize?: "both" | "horizontal" | "vertical" | "none",
}

export interface StyledTextareaProps extends Omit<TextareaProps, "variant" | "resize"> {
    $variant?: ComponentVariants,
    $resize?: "both" | "horizontal" | "vertical" | "none",
}