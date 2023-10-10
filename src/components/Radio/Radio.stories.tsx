import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";
import Fieldset from "../Fieldset/Fieldset";

const meta: Meta<typeof Radio> = {
    component: Radio,
    title: "Radio",
    tags: ["autodocs"],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Group: Story = {
    render: () => <>
        <Fieldset legend="Radio variants">
            <Radio id="default-radio"  name="variant" label="Default"/>
            <Radio id="primary-radio"  name="variant" label="Primary"  variant="primary"/>
            <Radio id="secondary-radio" name="variant" label="Secondary"  variant="secondary"/>
            <Radio id="base-radio" name="variant" label="Base"  variant="base"/>
        </Fieldset>
    </>
}
