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
    variant: "primary",
    defaultChecked: true,
  };

  
export const Secondary: Story = (args) => (
    <Checkbox {...args}/>
)

Secondary.args = {
    id: "my-checkbox-no",
    value: "no",
    variant:"secondary",
    label: "I don't love Retroact UI",
};

export const Group: Story = {
    render: () => <>
        <fieldset>
            <legend>Select your favorites: </legend>
            <Checkbox id="checkbox-pizza" value="yes" label="Ravioli" variant={"primary"}/>
            <Checkbox id="checkbox-lasagna" value="no" label="Lasagna" />
            <Checkbox id="checkbox-lasagna" value="no" label="Tiramisu" variant={"secondary"}/>
            <Checkbox id="checkbox-lasagna" value="no" label="Cannoli"/>
        </fieldset>
    </>
}