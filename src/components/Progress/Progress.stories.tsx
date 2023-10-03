import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Progress from "./Progress";
import Fieldset from "../Fieldset/Fieldset";

const meta: Meta<typeof Progress> = {
    component: Progress,
    title: "Progress",
    tags: ["autodocs"],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
    render: () => (<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Progress percent={5} />
        <Progress percent={35} />
        <Progress percent={50} />
        <Progress />
        <Progress percent={100} />
    </div>
    )
}

export const Primary: Story = {
    render: () => (<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Progress percent={5} variant={"primary"}/>
        <Progress percent={35} variant={"primary"}/>
        <Progress percent={50} variant={"primary"}/>
        <Progress variant={"primary"}/>
        <Progress percent={100} variant={"primary"}/>
    </div>
    )
}

export const Secondary: Story = {
    render: () => (<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Progress percent={5} variant={"secondary"}/>
        <Progress percent={35} variant={"secondary"}/>
        <Progress percent={50} variant={"secondary"}/>
        <Progress variant={"secondary"}/>
        <Progress percent={100} variant={"secondary"}/>
    </div>
    )
}

export const Base: Story = {
    render: () => (<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Progress percent={5} variant={"base"}/>
        <Progress percent={35} variant={"base"}/>
        <Progress percent={50} variant={"base"}/>
        <Progress variant={"base"}/>
        <Progress percent={100} variant={"base"}/>
    </div>
    )
}
