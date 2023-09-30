import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
    component: Text,
    title: "Text",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Text>;

export const TextVariants: Story = {
    render: () => <>
        <Text text="My font family is 'retro', which is the default across the library." />
        <Text text="My font family is 'venice'." fontFamily="venice" fontSize="2rem"/>
        <Text text="My font family is 'bitcell'." fontFamily="bitcell" fontSize="2rem"/>
        <Text text="My font family is 'alkhemikal'." fontFamily="alkhemikal" fontSize="2rem"/>
        <Text text="My font family is 'edunline'." fontFamily="edunline"fontSize="2rem" />
        <Text text="My font family is 'owre'." fontFamily="owre" fontSize="2rem"/>
    </>
}
