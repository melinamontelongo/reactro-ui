import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Box from "./Box";

const meta: Meta<typeof Box> = {
  component: Box,
  title: "Box",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Box>;

export const Boxes: Story = {
  render: () =>
    <div style={{ display: "flex", gap: "10px" }}>
      <Box width="10rem" height="15rem" children={<>I'm a default box.</>} />
      <Box width="10rem" height="15rem" variant="primary" children={<>I'm a primary box</>} />
      <Box width="10rem" height="15rem" variant="secondary" children={<>I'm a secondary box</>} />
      <Box width="10rem" height="15rem" variant="base" children={<>I'm a base box</>} />
    </div>
};