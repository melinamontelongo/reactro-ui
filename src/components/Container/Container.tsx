import React, { HTMLAttributes } from "react";
import styled from "styled-components";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode,
    size?: "sm" | "md" | "lg" | "xl",
}

const getContainerSizes = (props: ContainerProps) => {
    let sizes;
    switch (props.size) {
        case "sm":
            sizes = `
            @media(max-width: 576px){
                width: 100%;
            }
            width: 540px;
            `
            break;
        case "md":
            sizes = `
            @media(max-width: 768px){
                width: 100%;
            }
            max-width: 720px;
            `
            break;
        case "lg":
            sizes = `
            @media(max-width: 992px){
                width: 100%;
            }
            max-width: 960px;
            `
            break;
        case "xl":
            sizes = `
            @media(max-width: 1200px){
                width: 100%;
            }
            max-width: 1140px;
            `
            break;
    }
    return sizes;
}

const StyledContainer = styled.div<ContainerProps>`
    ${(props) => props.size ? getContainerSizes(props) : "max-width: 100%"}
    margin: auto;
`
const Container = ({ children, size }: ContainerProps) => {
    return (
        <StyledContainer size={size}>
            {children}
        </StyledContainer>
    )
}

export default Container;