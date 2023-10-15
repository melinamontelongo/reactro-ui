import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { getBaseProperty, getVariantColor } from "../../utils/variants";
import { ComponentVariants } from "../ThemeProvider/ThemeProvider";

export interface DialogProps {
    width?: string,
    height?: string,
    title: string,
    content: React.ReactNode,
    footer?: React.ReactNode,
    onClose?: MouseEventHandler<HTMLButtonElement>,
    variant?: ComponentVariants,
}

export interface StyledDialogProps extends Omit<DialogProps, "variant" | "height" | "width"> {
    $variant: ComponentVariants,
    $height: string,
    $width: string,
}

const ContentContainer = styled.div<Pick<StyledDialogProps, "$height" | "$variant">>`
    height: ${(props) => props.$height};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    border: ${(props) => props.theme.borderOutset} ${(props) => getVariantColor(props.$variant, props.theme, "shadow")};
    `
const Dialog = ({ width = "fit-content", height = "fit-content", title, content, footer, onClose, variant = "default" }: DialogProps) => {
    return (
        <StyledDialog $width={width} $variant={variant}>
            <TitleBar $variant={variant}>
                <Title>
                    {title}
                </Title>
                <Button size="sm" onClick={onClose} variant={variant}>X</Button>
            </TitleBar>
            <ContentContainer $height={height} $variant={variant}>
                <div>
                    {content}
                </div>
                <div>
                    {footer}
                </div>
            </ContentContainer>
        </StyledDialog>
    )
}

export default Dialog;