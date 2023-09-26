export interface InputProps {
    type: "text" | "password" | "email" | "tel" | "number" | "url",
    id: string,
    label?: string,
    $primary?: boolean,
    defaultValue?: string,
    placeholder?: string,
}