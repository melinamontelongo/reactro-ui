import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
    component: Icon,
    title: "Icon",
    tags: ["autodocs"],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Icons: Story = {
    render: () =>
        <>
            <div>
                <h2>Sizes</h2>
                <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                    <Icon
                        icon={<img src="./icon.png" />}
                        text={"Small"}
                        size={"sm"}
                    />
                    <Icon
                        icon={<img src="./icon.png" />}
                        text={"Medium"}
                        size={"md"}
                    />
                    <Icon
                        icon={<img src="./icon.png" />}
                        text={"Large"}
                        size={"lg"}
                    />
                </div>

                <h2>Variants</h2>
                <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                    <Icon
                        icon={<img src="./icon.png" />}
                        text={"Default"}
                        variant={"default"}
                    />
                    <Icon
                        icon={<img src="./icon.png" />}
                        text={"Primary"}
                        variant={"primary"}
                    />
                    <Icon
                        icon={<img src="./icon.png" />}
                        text={"Secondary"}
                        variant={"secondary"}
                    />
                    <Icon
                        icon={<img src="./icon.png" />}
                        text={"Base"}
                        variant={"base"}
                    />
                </div>
            </div>
        </>
}