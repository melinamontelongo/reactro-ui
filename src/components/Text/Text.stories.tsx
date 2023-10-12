import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
    component: Text,
    title: "Text",
    tags: ["autodocs"],
    argTypes: {
        children: { control: "text" },
        fontFamily: {
            options: ["retro", "venice", "bitcell", "alkhemikal", "edunline", "owre"],
            control: { type: "select" },
        },
        fontSize: { control: "text" },
    },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const TextTest: Story = (args) => (
    <Text {...args} />
)
TextTest.args = {
    children: "Test me!",

}
export const TextVariants: Story = {
    render: () => <>
        <Text>My font family is 'retro', which is the default across the library.</Text>
        <Text fontFamily="venice" fontSize="2rem">My font family is 'venice'.</Text>
        <Text fontFamily="bitcell" fontSize="2rem" >My font family is 'bitcell'.</Text>
        <Text fontFamily="alkhemikal" fontSize="2rem">My font family is 'alkhemikal'.</Text>
        <Text fontFamily="edunline" fontSize="2rem">My font family is 'edunline'.</Text>
        <Text fontFamily="owre" fontSize="2rem">My font family is 'owre'.</Text>
    </>
}
