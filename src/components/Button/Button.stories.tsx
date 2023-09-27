import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => (
  <Button {...args} />
);
Primary.args = {
  variant: "primary",
  disabled: false,
  text: "Primary",
};

export const Secondary: Story = (args) => (
  <Button {...args} />
);
Secondary.args = {
  variant: "secondary",
  disabled: false,
  text: "Secondary",
};

export const Disabled: Story = (args) => (
  <Button {...args} />
);
Disabled.args = {
  variant: "base",
  disabled: true,
  text: "Disabled",
};

export const Small: Story = (args) => (
  <Button {...args} />
);
Small.args = {
  disabled: false,
  size: "sm",
  text: "Small",
};

export const Medium: Story = (args) => (
  <Button {...args} />
);
Medium.args = {
  disabled: false,
  size: "md",
  text: "Medium",
};

export const Large: Story = (args) => (
  <Button {...args} />
);
Large.args = {
  disabled: false,
  size: "lg",
  text: "Large",
};