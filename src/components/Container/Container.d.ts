import React from "react";

export interface ContainerProps {
    children: React.ReactNode,
    size?: "sm" | "md" | "lg" | "xl",
}