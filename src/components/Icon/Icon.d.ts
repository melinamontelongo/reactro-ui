import React, { HTMLAttributes } from "react";
import { ComponentVariants, Sizes } from "../../types/theme";

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
    text: string,
    icon: React.ReactNode,
    size?: Sizes,
    variant?: ComponentVariants,
}   

export interface StyledIconProps extends Omit<IconProps, "size" | "variant"> {
    $size: Sizes,
    $variant: ComponentVariants,
}