import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Circle from "./Circle";
import Text from "../Text";

const meta: Meta<typeof Circle> = {
    component: Circle,
    title: "Circle",
    tags: ["autodocs"],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Circle>;

export const Circles: Story = {
    render: () => <>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <Circle width="5rem" children={<img src="./icon.png" />} variant="default" />
            <Circle width="7.5rem" children={<img src="./icon.png" />} variant="primary" />
            <Circle width="10rem" children={<img src="./icon.png" />} variant="secondary" />
            <Circle width="15rem" children={<Text align="center">I can also contain text!</Text>} variant="base" />
        </div></>
};