import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Textarea from "./Textarea";
import Fieldset from "../Fieldset/Fieldset";

const meta: Meta<typeof Textarea> = {
    component: Textarea,
    title: "Textarea",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Label: Story = (args) => (
    <Textarea {...args}/>
)

Label.args = {
    id: "no-label-input-name",
    label: "Textarea with a label...",
    placeholder: "I'm a textarea that can't be resized but have a rows value of 10 and an onChange function...",
    resize: "none",
    rows: 10,
    onChange: (e) => console.log(e.target.value),
  };

export const NoLabel: Story = (args) => (
    <Textarea {...args}/>
)

NoLabel.args = {
    id: "no-label-input-email",
    placeholder: "I have no label but, as you can see, I can be resized... There's so many possibilities!",
    cols: 30,
    rows: 10,
    onChange: (e) => console.log(e.target.value)
};