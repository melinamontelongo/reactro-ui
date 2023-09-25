import React from "react";
import styled from "styled-components";
import { DialogProps } from "./Dialog.d";
import Button from "../Button/Button";

const ContentContainer = styled.div<Pick<DialogProps, "height">>`
    min-height: ${(props) => props.height};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 10px;
    color: ${(props) => props.theme.colors.primary.color};
`
const Title = styled.h2`
  font-size: 20px;
`
const TitleBar = styled.div`
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background-color: ${(props) => props.theme.colors.primary.bg};
    color: ${(props) => props.theme.colors.primary.color};
    border-bottom: 4px solid ${(props) => props.theme.colors.primary.shadow};
`
const StyledDialog = styled.div<Pick<DialogProps, "width">>`
    width: ${(props) => props.width};
    min-width: min-content;
    background-color: ${(props) => props.theme.colors.secondary.bg};
    border: ${(props) => props.theme.borderOutset} ${(props) => props.theme.colors.primary.shadow};
    `
const Dialog = ({ width, height, title, content, footer, onClose }: DialogProps) => {
    return (
        <StyledDialog width={width}>
            <TitleBar>
                <Title>
                    {title}
                </Title>
                <Button size="sm" text="X" $primary onClick={onClose} />
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