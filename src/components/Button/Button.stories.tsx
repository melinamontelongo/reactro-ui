import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Buttons: Story = {
  render: () => <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    <div>
      <h2>Variants</h2>
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="base">Base</Button>
    </div>
    <div>
      <h2>Sizes</h2>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
    <div>
      <h2>Disabled</h2>
      <Button disabled>Default</Button>
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="base" disabled>Base</Button>
    </div>
  </div>
};