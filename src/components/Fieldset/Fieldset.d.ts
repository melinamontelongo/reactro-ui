import { ComponentVariants } from "../../types/theme";

export interface FieldsetProps {
    children: React.ReactNode,
    variant?: ComponentVariants,
    legend?: string,
}

export interface StyledFieldsetProps extends Pick<FieldsetProps, "children" | "legend">{
    $variant?: ComponentVariants,
}