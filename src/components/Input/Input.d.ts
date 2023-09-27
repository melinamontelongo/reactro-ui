import { ComponentVariants } from "../../types/theme";

export interface InputProps {
    type: "text" | "password" | "email" | "tel" | "number" | "url",
    id: string,
    label?: string,
    variant?: ComponentVariants,
    defaultValue?: string,
    placeholder?: string,
}

export interface StyledInputProps extends Pick<InputProps, "type" | "id" | "label" | "defaultValue" | "placeholder">{
    $variant?: ComponentVariants;
}