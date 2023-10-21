import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Taskbar from "./Taskbar";

const meta: Meta<typeof Taskbar> = {
    component: Taskbar,
    title: "Taskbar",
    tags: ["autodocs"],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Taskbar>;

export const DefaultTaskbar: Story = {
    render: () =>
        <Taskbar
            start="Start"
            elements={<>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </>}
        />
}

export const Primary: Story = {
    render: () =>
        <Taskbar
            variant="primary"
            start="Inicio"
            elements={<>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </>}
        />
}

export const Secondary: Story = {
    render: () =>
        <Taskbar
            variant="secondary"
            start="Hello!"
            elements={<>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </>}
        />
}

export const Base: Story = {
    render: () =>
        <Taskbar
            variant="base"
            start="Hey!"
            elements={<>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </>}
        />
}