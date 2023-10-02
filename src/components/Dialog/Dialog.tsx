import React from "react";
import styled from "styled-components";
import { DialogProps, StyledDialogProps } from "./Dialog.d";
import Button from "../Button/Button";
import { getBaseProperty, getVariantColor } from "../../utils/variants";

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
const Dialog = ({ width, height, title, content, footer, onClose, variant = "default" }: DialogProps) => {
    return (
        <StyledDialog $width={width} $variant={variant}>
            <TitleBar $variant={variant}>
                <Title>
                    {title}
                </Title>
                <Button size="sm" text="X" onClick={onClose} variant={variant} />
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