import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
    component: Select,
    title: "Select",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Label: Story = {
    render: () =>
        <Select id="select-label" name="select-label" variant="primary" placeholder="--I'm the placeholder--" label="Select component with label and placeholder" style={{width: "500px"}}>
            <option value="value1">We're</option>
            <option value="value2">the</option>
            <option value="value3">options</option>
            <option value="value4">;)</option>
        </Select>
}

export const NoLabel: Story = {
    render: () =>
        <Select id="select-no-label" name="select-no-label">
            <option value="value1">We have...</option>
            <option value="value2">no placeholder</option>
            <option value="value3">nor label</option>
            <option value="value4">:(</option>
        </Select>
}