import { ComponentVariants } from "../../types/theme";

export interface ProgressProps {
    percent?: number,
    variant?: ComponentVariants,
}

export interface StyledProgressProps {
    $percent: number,
    $variant: ComponentVariants,
}