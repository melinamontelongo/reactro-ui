import React from "react";
import styled from "styled-components";

interface FlexContainerProps {
    children: React.ReactNode,
    direction?: "row" | "column",
    justifyContent?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch" | "normal",
    alignItems?: "stretch" | "center" | "start" | "end" | "normal"
    gap?: string,
    wrap?: "wrap" | "no-wrap",
}
interface StyledFlexContainerProps {
    $direction?: "row" | "column",
    $justifyContent?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch" | "normal",
    $alignItems?: "stretch" | "center" | "start" | "end" | "normal"
    $gap?: string,
    $wrap?: "wrap" | "no-wrap",
}
const StyledContainer = styled.div<StyledFlexContainerProps>`
    display: flex;
    flex-direction: ${(props) => props.$direction};
    justify-content: ${(props) => props.$justifyContent};
    align-items: ${(props) => props.$alignItems};
    gap: ${(props) => props.$gap};
    flex-wrap: wrap;
`

const FlexContainer = ({ children, direction = "row", justifyContent = "start", alignItems = "start", gap = "0px", wrap="wrap" }: FlexContainerProps) => {
    return (
        <StyledContainer $direction={direction} $justifyContent={justifyContent} $alignItems={alignItems} $gap={gap} $wrap={wrap}>
            {children}
        </StyledContainer>
    )
}

export default FlexContainer;