export interface FieldsetProps {
    children: React.ReactNode,
    primary?: boolean,
    legend?: string,
}

export interface StyledFieldsetProps extends Pick<FieldsetProps, "children" | "legend">{
    $primary?: boolean,
}