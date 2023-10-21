import React, { HTMLAttributes, useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import { ComponentVariants } from "../ThemeProvider/ThemeProvider";
import styled from "styled-components";
import { getBaseProperty, getVariantColor } from "../../utils/variants";
import { DropdownContainer, DropdownDetails, DropdownList, DropdownSummary } from "../Dropdown/Dropdown";
import FlexContainer from "../FlexContainer";
import Button from "../Button";

interface TaskbarProps extends HTMLAttributes<HTMLDivElement> {
    start: string,
    elements?: React.ReactNode,
    variant?: ComponentVariants,
}

interface StyledTaskbarProps extends Omit<TaskbarProps, "variant" | "start"> {
    $variant?: ComponentVariants,
}

const StyledTaskbar = styled.div<StyledTaskbarProps>`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2.2rem;
    background-color: ${(props) => getVariantColor(props.$variant!, props.theme, "bg")};
    border: ${(props) => getBaseProperty(props.theme, "borderOutset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")};
    `

const StartBtn = styled(Dropdown)`
${DropdownSummary}{
    position: absolute; 
    bottom: 0;
    left: 0;
    list-style: none;
    border: none;
    border-right: 4px solid ${(props) => getVariantColor(props.variant!, props.theme, "shadow")};
}
${DropdownList}{
    bottom: 20px;
    margin: none;
    padding: none;
    left: -4px;
}
`

const Time = styled(Button)`
    border: none;
    cursor: auto;
    &:hover{
        background-color: unset;
        border: none;
        color: ${(props) => getVariantColor(props.variant!, props.theme, "color")};
        background: unset;
    }
    &:active, &:focus{
        background-color: unset;
        color: ${(props) => getVariantColor(props.variant!, props.theme, "color")};
    }
`

const getDate = () => {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
}

const Taskbar = ({ start, elements, variant = "default" }: TaskbarProps) => {
    const [date, setDate] = useState<string>(getDate());
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setDate(getDate());
        }, 1000);
        return () => clearTimeout(timer);
      }, []);
    
    return (
        <StyledTaskbar $variant={variant}>
            <FlexContainer justifyContent="space-between" alignItems="center">
                <StartBtn text={start} variant={variant}>
                    {elements}
                </StartBtn>
                <Time variant={variant}>
                    {date}
                </Time>
            </FlexContainer>
        </StyledTaskbar>
    )
}

export default Taskbar;