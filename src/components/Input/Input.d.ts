import { ComponentVariants } from "../../types/theme";

export interface InputProps {
    type: "text" | "password" | "email" | "tel" | "number" | "url",
    id?: string,
    name?: string,
    label?: string,
    variant?: ComponentVariants,
    defaultValue?: string,
    value?: string,
    placeholder?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    readonly?: boolean,
    disabled?: boolean,
}

export interface StyledInputProps extends Omit<InputProps, "variant"> {
    $variant?: ComponentVariants;
}