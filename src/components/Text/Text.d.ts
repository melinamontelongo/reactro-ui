import React, { HTMLAttributes } from "react";
import { FontFamily, TextTypes } from "../../types/theme";

export interface TextProps extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
    text: string,
    tag?: TextTypes,
    fontSize?: string,
    fontFamily?: FontFamily,
}