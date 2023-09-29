import { ComponentVariants } from "../../types/theme";

export interface CheckboxProps{
    id?: string,
    value?: string,
    name?: string,
    label: string,
    variant?: ComponentVariants,
    defaultChecked?: boolean,
}

export interface StyledCheckboxProps extends Pick<CheckboxProps, "id" | "value" | "defaultChecked" | "label">{
    $variant?: ComponentVariants,
}