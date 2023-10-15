import React, { HTMLAttributes } from "react";
import { ComponentVariants } from "../ThemeProvider/ThemeProvider";
import styled from "styled-components";
import { getBaseProperty, getVariantColor } from "../../utils/variants";
import Dropdown, { DropdownContainer } from "../Dropdown/Dropdown";

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
    items?: React.ReactNode[],
    brand?: React.ReactNode,
    variant?: ComponentVariants,
}

interface StyledNavbarProps extends Omit<NavbarProps, "variant"> {
    $variant?: ComponentVariants,
}

const StyledNavbar = styled.div<StyledNavbarProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 4rem;
    background-color: ${(props) => getVariantColor(props.$variant!, props.theme, "bg")};
    border: ${(props) => getBaseProperty(props.theme, "borderOutset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
`

const Container = styled.div`
    height: 100%;
    padding: 0px 50px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    @media (max-width: 576px){
        padding: 0px 20px;
    }
`

const Brand = styled.div`
    height: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
    overflow: hidden;
`

const Items = styled.div`
    display: flex;
    gap: 5px;
    @media (max-width: 576px){
        display: none;
    }
`
const ResponsiveItems = styled(Dropdown)`
    @media (max-width: 576px){
        display: flex;
        ${DropdownContainer}{
            right: 0;
        }
    }
    display: none;
`
const Navbar = ({ items, brand, variant = "default" }: NavbarProps) => {
    return (
        <StyledNavbar $variant={variant}>
            <Container>
                <Brand>
                    {brand}
                </Brand>
                <Items>
                    {items && items?.map((item) => {
                        return <>{item}</>
                    })}
                </Items>
                <ResponsiveItems text="..." isList={false} variant={variant}>
                    {items && items?.map((item) => {
                        return <>{item}</>
                    })}
                </ResponsiveItems>
            </Container>
        </StyledNavbar>
    )
}

export default Navbar;