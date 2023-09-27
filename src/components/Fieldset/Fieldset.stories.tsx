import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Fieldset from "./Fieldset";

const meta: Meta<typeof Fieldset> = {
    component: Fieldset,
    title: "Fieldset",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
    render: () => <>
    <Fieldset legend="Fieldset" variant="primary">
        I'm a primary fieldset!
    </Fieldset>
    <Fieldset legend="Fieldset" variant="secondary">
        I'm a secondary fieldset!
    </Fieldset>
    </>
}