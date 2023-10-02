import { DetailsHTMLAttributes } from "react";
import { ComponentVariants, Sizes } from "../../types/theme";

export interface DropdownProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
    text?: string;
    variant?: ComponentVariants;
    size?: Sizes;
    isList?: boolean;
    children?: React.ReactNode,
}

export interface StyledDropdownProps extends Omit<DropdownProps, "variant"> {
    $variant?: ComponentVariants,
}