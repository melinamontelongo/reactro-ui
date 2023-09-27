import React from "react";

export interface BoxProps {
    children: React.ReactNode,
    width: string,
    height: string,
    primary?: boolean,
}

export interface StyledBoxProps extends Pick<BoxProps, "children">{
    $primary?: boolean,
    $width: string,
    $height: string,
}