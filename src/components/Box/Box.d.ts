import React from "react";
import { ComponentVariants } from "../../types/theme";

export interface BoxProps {
    children: React.ReactNode,
    width: string,
    height: string,
    variant?: ComponentVariants,
}

export interface StyledBoxProps extends Pick<BoxProps, "children">{
    $variant?: ComponentVariants,
    $width: string,
    $height: string,
}