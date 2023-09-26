import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
    title: "Checkbox",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = (args) => (
    <Checkbox {...args}/>
)

Primary.args = {
    id: "my-checkbox-yes",
    value: "yes",
    label: "I love Retroact UI",
    $primary: true,
  };

  
export const Secondary: Story = (args) => (
    <Checkbox {...args}/>
)

Secondary.args = {
    id: "my-checkbox-no",
    value: "no",
    label: "I don't love Retroact UI",
  };