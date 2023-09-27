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

export const Primary: Story = (args) => (
    <Input {...args}/>
)

Primary.args = {
    id: "primary-input-name",
    type: "text",
    label: "Name",
    primary: true,
    placeholder: "Your name...",
  };

  
export const Secondary: Story = (args) => (
    <Input {...args}/>
)

Secondary.args = {
    id: "secondary-input-email",
    type: "email",
    label: "Email",
    placeholder: "Your email...",
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
        <Fieldset primary>
            <legend>Your personal information: </legend>
            <Input type="text" id="input-name" defaultValue="Who knows?" label="Name" primary={true} placeholder="Your name..."/>
            <Input type="email" id="input-email" label="Email" placeholder="Your email..."/>
            <Input type="password" id="input-password" label="Password" primary={true} placeholder="Your password..."/>
        </Fieldset>
    </>
}