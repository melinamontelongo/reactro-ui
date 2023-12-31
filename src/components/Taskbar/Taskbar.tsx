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
    border-bottom: none;
    user-select: none;
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
        border: none;
        color: ${(props) => getVariantColor(props.variant!, props.theme, "color")};
    }
`

const getDate = () => {
    return new Date().toLocaleTimeString("en-US", { hour12: false });
}
//  Returns date without seconds
const formatDate = (date: string): string => {
    const dateArr = date.split(":");
    //  Remove seconds
    dateArr.pop();
    //  Join date again
    return dateArr.join(":")
}
const Taskbar = ({ start, elements, variant = "default", ...props }: TaskbarProps) => {
    const [date, setDate] = useState<string>(getDate());

    useEffect(() => {
        const timer = setTimeout(() => {
            setDate(getDate());
        }, 1000);
        return () => clearTimeout(timer);
    }, [date]);

    return (
        <StyledTaskbar $variant={variant} {...props}>
            <FlexContainer justifyContent="space-between" alignItems="center">
                <StartBtn text={start} variant={variant}>
                    {elements}
                </StartBtn>
                <Time variant={variant}>
                    {formatDate(date)}
                </Time>
            </FlexContainer>
        </StyledTaskbar>
    )
}

export default Taskbar;