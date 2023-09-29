import { ChangeEventHandler } from "react";
import { ComponentVariants } from "../../types/theme";

export interface TextareaProps {
    id?: string,
    name?: string,
    label?: string,
    variant?: ComponentVariants,
    defaultValue?: string,
    value?: string,
    placeholder?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    resize?: "both" | "horizontal" | "vertical" | "none",
    cols?: string,
    rows?: string,
    readonly?: boolean,
}

export interface StyledTextareaProps extends Omit<TextareaProps, "variant" | "resize">{
    $variant?: ComponentVariants,
    $resize?: "both" | "horizontal" | "vertical" | "none",
}