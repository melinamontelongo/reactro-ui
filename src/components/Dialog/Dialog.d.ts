import React, { MouseEventHandler } from "react";

export interface DialogProps {
    width: string,
    height: string,
    title: string,
    content: React.ReactNode,
    footer?: React.ReactNode,
    onClose?: MouseEventHandler<HTMLButtonElement>,
}