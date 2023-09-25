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

export const Primary: Story = (args) => (
  <Box {...args} />
);
Primary.args = {
  width:"10rem",
  height: "15rem",
  $primary: true,
  children: <></>
};

export const Secondary: Story = (args) => (
  <Box {...args} />
);
Secondary.args = {
  width:"10rem",
  height: "15rem",
  children: <></>
};