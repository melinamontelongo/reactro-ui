import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";
import Fieldset from "../Fieldset/Fieldset";

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
    title: "Checkbox",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const AllCheckboxes: Story = {
    render: () => <>
        <Fieldset legend="Checkbox variants">
            <Checkbox id="checkbox-default" value="yes" label="Default" />
            <Checkbox id="checkbox-primary" value="no" label="Primary" variant="primary" />
            <Checkbox id="checkbox-secondary" value="no" label="Secondary" variant="secondary" />
            <Checkbox id="checkbox-base" value="no" label="Base" variant="base" />
        </Fieldset>
    </>
};