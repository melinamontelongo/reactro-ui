import React, { HTMLAttributes, MouseEventHandler } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { getBaseProperty, getVariantColor } from "../../utils/variants";
import { ComponentVariants } from "../ThemeProvider/ThemeProvider";

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
    width?: string,
    height?: string,
    title: string,
    dialogContent: React.ReactNode,
    footer?: React.ReactNode,
    onClose?: MouseEventHandler<HTMLButtonElement>,
    variant?: ComponentVariants,
    justifyContent?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch" | "normal",
    alignItems?: "stretch" | "center" | "start" | "end" | "normal"
}

export interface StyledDialogProps extends Omit<DialogProps, "variant" | "height" | "width" | "justifyContent" | "alignItems"> {
    $variant: ComponentVariants,
    $height: string,
    $width: string,
    $justifyContent?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch" | "normal",
    $alignItems?: "stretch" | "center" | "start" | "end" | "normal"
}

const ContentContainer = styled.div<Pick<StyledDialogProps, "$height" | "$variant" | "$justifyContent" | "$alignItems">>`
    height: ${(props) => props.$height};
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => props.$justifyContent};
    align-items: ${(props) => props.$alignItems};
    padding: 5px 15px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 15px;
    }
    &::-webkit-scrollbar-track {
        background: ${(props) => getVariantColor(props.$variant!, props.theme, "color")};
    }
    &::-webkit-scrollbar-thumb {
        background: ${(props) => getVariantColor(props.$variant!, props.theme, "bg")};
        border: ${(props) => getBaseProperty(props.theme, "borderOutset")} ${(props) => getVariantColor(props.$variant!, props.theme, "shadow")}
    }
      
    &::-webkit-scrollbar-thumb:hover {
        background: ${(props) => getVariantColor(props.$variant!, props.theme, "hoverBg")};
    }
`
const Title = styled.h2`
  font-size: 20px;
`
const TitleBar = styled.div<Pick<StyledDialogProps, "$variant">>`
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background-color: ${(props) => getVariantColor(props.$variant, props.theme, "bg")};
    color: ${(props) => getVariantColor(props.$variant, props.theme, "color")};
    border-bottom: 4px solid ${(props) => getVariantColor(props.$variant, props.theme, "shadow")};
`
const StyledDialog = styled.div<Pick<StyledDialogProps, "$width" | "$variant">>`
    width: ${(props) => props.$width};
    min-width: min-content;
    background-color: ${(props) => getVariantColor(props.$variant, props.theme, "hoverBg")};
    outline: ${(props) => props.theme.borderOutset} ${(props) => getVariantColor(props.$variant, props.theme, "shadow")};
    `

const DialogFooter = styled.div`
    padding: 15px 5px;
    `
const Dialog = ({ width = "fit-content", height = "fit-content", title, dialogContent, footer, onClose, variant = "default", justifyContent = "space-between", alignItems = "normal", ...props }: DialogProps) => {
    return (
        <StyledDialog $width={width} $variant={variant} {...props}>
            <TitleBar $variant={variant}>
                <Title>
                    {title}
                </Title>
                <Button size="sm" onClick={onClose} variant={variant}>X</Button>
            </TitleBar>
            <ContentContainer $height={height} $variant={variant} $justifyContent={justifyContent} $alignItems={alignItems}>
                <div>
                    {dialogContent}
                </div>
                {footer &&
                    <DialogFooter>
                        {footer}
                    </DialogFooter>
                }
            </ContentContainer>
        </StyledDialog>
    )
}

export default Dialog;