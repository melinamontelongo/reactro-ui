import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";
import Fieldset from "../Fieldset/Fieldset";

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
    title: "Checkbox",
    tags: ["autodocs"],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Checkboxes: Story = {
    render: () => <>
        <Fieldset legend="Checkbox variants">
            <Checkbox id="checkbox-default" label="Default" />
            <Checkbox id="checkbox-primary" label="Primary" variant="primary" />
            <Checkbox id="checkbox-secondary" label="Secondary" variant="secondary" />
            <Checkbox id="checkbox-base" label="Base" variant="base" />
        </Fieldset>
    </>
};