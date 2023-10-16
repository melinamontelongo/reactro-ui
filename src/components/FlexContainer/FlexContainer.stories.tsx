import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FlexContainer from "./FlexContainer";
import Box from "../Box/Box";

const meta: Meta<typeof FlexContainer> = {
    component: FlexContainer,
    title: "Flex Container",
    tags: ["autodocs"],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof FlexContainer>;

export const Start: Story = {
    render: () => <FlexContainer direction="column" gap="20px">
        <div>
            Columns 
            <FlexContainer direction="column" gap="10px">
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
            </FlexContainer>
        </div>
        <div>
            Rows
            <FlexContainer direction="row" gap="10px">
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
            </FlexContainer>
        </div>
    </FlexContainer>
}

export const Center: Story = {
    render: () => <FlexContainer direction="column" gap="20px" justifyContent="center" alignItems="center">
        <div>
            Columns 
            <FlexContainer direction="column" gap="10px" justifyContent="center" alignItems="center">
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
            </FlexContainer>
        </div>
        <div>
            Rows
            <FlexContainer direction="row" gap="10px" justifyContent="center" alignItems="center">
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
            </FlexContainer>
        </div>
    </FlexContainer>
}

export const End: Story = {
    render: () => <FlexContainer direction="column" gap="20px" justifyContent="end" alignItems="end">
        <div>
            Columns 
            <FlexContainer direction="column" gap="10px" justifyContent="end" alignItems="end">
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
            </FlexContainer>
        </div>
        <div>
            Rows
            <FlexContainer direction="row" gap="10px" justifyContent="end" alignItems="end">
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
                <Box width="100px" height="fit">Flex item</Box>
            </FlexContainer>
        </div>
    </FlexContainer>
}