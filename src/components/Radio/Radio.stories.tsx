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

export const AllRadios: Story = {
    render: () => <>
        <Fieldset legend="Radio variants">
            <Radio id="default-radio"  name="default" label="Default"/>
            <Radio id="primary-radio"  name="primary" label="Primary"  variant="primary"/>
            <Radio id="secondary-radio" name="secondary" label="Secondary"  variant="secondary"/>
            <Radio id="base-radio" name="base" label="Base"  variant="base"/>
        </Fieldset>
    </>
}
