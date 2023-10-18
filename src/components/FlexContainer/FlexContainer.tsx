import React, { HTMLAttributes } from "react";
import styled from "styled-components";

interface FlexContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode,
    direction?: "row" | "column",
    justifyContent?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch" | "normal",
    alignItems?: "stretch" | "center" | "start" | "end" | "normal"
    gap?: string,
    wrap?: "wrap" | "no-wrap",
    width?: string
}
interface StyledFlexContainerProps {
    $direction?: "row" | "column",
    $justifyContent?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch" | "normal",
    $alignItems?: "stretch" | "center" | "start" | "end" | "normal"
    $gap?: string,
    $wrap?: "wrap" | "no-wrap",
    $width?: string
}
const StyledContainer = styled.div<StyledFlexContainerProps>`
    display: flex;
    flex-direction: ${(props) => props.$direction};
    justify-content: ${(props) => props.$justifyContent};
    align-items: ${(props) => props.$alignItems};
    gap: ${(props) => props.$gap};
    width: ${(props) => props.$width};
    flex-wrap: wrap;
`

const FlexContainer = ({ children, direction = "row", justifyContent = "start", alignItems = "start", gap = "0px", wrap="wrap", width = "fit-content", ...props }: FlexContainerProps) => {
    return (
        <StyledContainer $direction={direction} $justifyContent={justifyContent} $alignItems={alignItems} $gap={gap} $wrap={wrap} $width={width} {...props}>
            {children}
        </StyledContainer>
    )
}

export default FlexContainer;