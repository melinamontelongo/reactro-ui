import React from "react";
import styled from "styled-components";
import { DialogProps, StyledDialogProps } from "./Dialog.d";
import Button from "../Button/Button";
import { getVariantColor } from "../../utils/variants";

const ContentContainer = styled.div<Pick<DialogProps, "height">>`
    min-height: ${(props) => props.height};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 10px;
`
const Title = styled.h2`
  font-size: 20px;
`
const TitleBar = styled.div<Pick<StyledDialogProps, "$variant">>`
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background-color: ${(props) => getVariantColor(props.$variant, props.theme, "bg")};
    color: ${(props) => getVariantColor(props.$variant, props.theme, "color")};
    border-bottom: 4px solid ${(props) => getVariantColor(props.$variant, props.theme, "shadow")};
`
const StyledDialog = styled.div<Pick<StyledDialogProps, "width" | "$variant">>`
    width: ${(props) => props.width};
    min-width: min-content;
    background-color: ${(props) => getVariantColor(props.$variant, props.theme, "hoverBg")};
    border: ${(props) => props.theme.borderOutset} ${(props) => getVariantColor(props.$variant, props.theme, "shadow")};
    `
const Dialog = ({ width, height, title, content, footer, onClose, variant = "default" }: DialogProps) => {
    return (
        <StyledDialog width={width} $variant={variant}>
            <TitleBar $variant={variant}>
                <Title>
                    {title}
                </Title>
                <Button size="sm" text="X" onClick={onClose} variant={variant}/>
            </TitleBar>
            <ContentContainer height={height}>
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