export interface RadioProps {
    id: string,
    value: string,
    name: string,
    label: string,
    primary?: boolean,
    defaultChecked?: boolean,
}

export interface StyledRadioProps extends Pick<RadioProps, "id" | "value" | "name" | "label" | "defaultChecked">{
    $primary?: boolean;
}