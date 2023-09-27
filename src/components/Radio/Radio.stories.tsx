import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";
import Fieldset from "../Fieldset/Fieldset";

const meta: Meta<typeof Radio> = {
    component: Radio,
    title: "Radio",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Primary: Story = (args) => (
    <Radio {...args} />
)

Primary.args = {
    id: "my-radio-yes",
    value: "yes",
    name: "likes-retroact",
    label: "I love Retroact UI",
    variant: "primary",
    defaultChecked: true,
};


export const Secondary: Story = (args) => (
    <Radio {...args} />
)

Secondary.args = {
    id: "my-radio-no",
    value: "no",
    variant:"secondary",
    name: "likes-retroact",
    label: "I don't love Retroact UI",
};

export const Group: Story = {
    render: () => <>
        <Fieldset legend="Do you like Spaghetti?">
            <Radio id="spaghetti-radio-yes" value="yes" name="like-spaghetti" label="Yes" variant="primary"/>
            <Radio id="spaghetti-radio-no" value="no" name="like-spaghetti" label="No" />
        </Fieldset>
    </>
}
