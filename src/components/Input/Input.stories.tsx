import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import Fieldset from "../Fieldset/Fieldset";

const meta: Meta<typeof Input> = {
    component: Input,
    title: "Input",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Label: Story = (args) => (
    <Input {...args}/>
)

Label.args = {
    id: "no-label-input-name",
    type: "text",
    label: "Name",
    placeholder: "Your name...",
  };

export const NoLabel: Story = (args) => (
    <Input {...args}/>
)

NoLabel.args = {
    id: "no-label-input-email",
    type: "email",
    placeholder: "Your email...",
};

export const Group: Story = {
    render: () => <>
        <Fieldset legend="Input variants">
        <Input type="text" id="input-default" label="Default" placeholder="I'm a default input..."/>
            <Input type="text" id="input-primary" defaultValue="I'm a primary input with a default value!" label="Primary" variant="primary" placeholder="I'm a primary input..."/>
            <Input type="email" id="input-secondary" label="Secondary" variant="secondary" placeholder="I'm a secondary input..."/>
            <Input type="password" id="input-base" label="Base" variant="base" placeholder="I'm a base input with password type..."/>
            <Input type="number" id="input-number" label="Number" placeholder="I can also be type number..."/>
            <Input type="email" id="input-email" label="Email" placeholder="Or email..."/>
            <Input type="tel" id="input-tel" label="Telephone" placeholder="Or tel..."/>
            <Input type="url" id="input-tel" label="Url" placeholder="Even url!"/>
        </Fieldset>
    </>
}