import React from "react";

export interface BoxProps {
    children: React.ReactNode,
    width: string,
    height: string,
    $primary?: boolean,
}