import styled from "styled-components";
import { ContainerProps } from "./Container.d";
import React from "react";

const getContainerSizes = (props: ContainerProps) => {
    let sizes;
    switch (props.size) {
        case "sm":
            sizes = `
            @media(max-width: 576px){
                max-width: 100%;
            }
            max-width: 540px;
            `
            break;
        case "md":
            sizes = `
            @media(max-width: 768px){
                max-width: 100%;
            }
            max-width: 720px;
            `
            break;
        case "lg":
            sizes = `
            @media(max-width: 992px){
                max-width: 100%;
            }
            max-width: 960px;
            `
            break;
        case "xl":
            sizes = `
            @media(max-width: 1200px){
                max-width: 100%;
            }
            max-width: 1140px;
            `
            break;
    }
    return sizes;
}

const StyledContainer = styled.div<ContainerProps>`
    ${(props) => props.size? getContainerSizes(props) : "max-width: 100%"}
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