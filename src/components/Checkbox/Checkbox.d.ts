export interface CheckboxProps{
    id: string,
    value: string,
    label: string,
    primary?: boolean,
    defaultChecked?: boolean,
}

export interface StyledCheckboxProps extends Pick<CheckboxProps, "id" | "value" | "defaultChecked" | "label">{
    $primary?: boolean,
}