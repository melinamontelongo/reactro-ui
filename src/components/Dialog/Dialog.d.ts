import React, { MouseEventHandler } from "react";
import { ComponentVariants } from "../../types/theme";

export interface DialogProps {
    width: string,
    height: string,
    title: string,
    content: React.ReactNode,
    footer?: React.ReactNode,
    onClose?: MouseEventHandler<HTMLButtonElement>,
    variant?: ComponentVariants,
}

export interface StyledDialogProps extends Omit<DialogProps, "variant" | "height" | "width"> {
    $variant: ComponentVariants,
    $height: string,
    $width: string,
}