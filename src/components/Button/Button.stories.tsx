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
      <Button text="Default" />
      <Button text="Primary" variant="primary" />
      <Button text="Secondary" variant="secondary" />
      <Button text="Base" variant="base" />
    </div>
    <div>
      <h2>Sizes</h2>
      <Button text="Small" size="sm" />
      <Button text="Medium" size="md" />
      <Button text="Large" size="lg" />
    </div>
    <div>
      <h2>Disabled</h2>
      <Button text="Default" disabled />
      <Button text="Primary" variant="primary" disabled />
      <Button text="Secondary" variant="secondary" disabled />
      <Button text="Base" variant="base" disabled />
    </div>
  </div>
};