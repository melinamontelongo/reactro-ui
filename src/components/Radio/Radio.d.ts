import { ComponentVariants } from "../../types/theme";

export interface RadioProps {
    id?: string,
    value?: string,
    name?: string,
    label: string,
    variant?: ComponentVariants,
    defaultChecked?: boolean,
}

export interface StyledRadioProps extends Omit<RadioProps, "variant"> {
    $variant?: ComponentVariants;
}