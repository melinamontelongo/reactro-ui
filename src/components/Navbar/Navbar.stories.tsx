import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import Text from "../Text/Text";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
const meta: Meta<typeof Navbar> = {
    component: Navbar,
    title: "Navbar",
    tags: ["autodocs"],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
    render: () =>
        <Navbar
            brand={<Text tag="h2">Reactro UI</Text>}
            items={[
                <Button size="sm">Home</Button>,
                <Button size="sm">Favorites</Button>,
                <Button size="sm">About</Button>,
                <Dropdown text="Account" size="sm">
                    <li>Profile</li>
                    <li>Friends</li>
                    <li>Logout</li>
                </Dropdown>,
            ]}
        />
}

export const Primary: Story = {
    render: () =>
        <Navbar variant="primary"
            brand={<Text tag="h2">Reactro UI</Text>}
            items={[
                <Button size="sm" variant="primary">Home</Button>,
                <Button size="sm" variant="primary">Favorites</Button>,
                <Button size="sm" variant="primary">About</Button>,
                <Dropdown text="Account" size="sm" variant="primary">
                    <li>Profile</li>
                    <li>Friends</li>
                    <li>Logout</li>
                </Dropdown>,
            ]}
        />
}

export const Secondary: Story = {
    render: () =>
        <Navbar variant="secondary"
            brand={<Text tag="h2">Reactro UI</Text>}
            items={[
                <Button size="sm" variant="secondary">Home</Button>,
                <Button size="sm" variant="secondary">Favorites</Button>,
                <Button size="sm" variant="secondary">About</Button>,
                <Dropdown text="Account" size="sm" variant="secondary">
                    <li>Profile</li>
                    <li>Friends</li>
                    <li>Logout</li>
                </Dropdown>,
            ]}
        />
}

export const Base: Story = {
    render: () =>
        <Navbar variant="base"
            brand={<Text tag="h2">Reactro UI</Text>}
            items={[
                <Button size="sm" variant="base">Home</Button>,
                <Button size="sm" variant="base">Favorites</Button>,
                <Button size="sm" variant="base">About</Button>,
                <Dropdown text="Account" size="sm" variant="base">
                    <li>Profile</li>
                    <li>Friends</li>
                    <li>Logout</li>
                </Dropdown>,
            ]}
        />
}

export const WithLogo: Story = {
    render: () =>
        <Navbar
            brand={<a href="#" target="_blank"><img src="./icon.png" style={{ height: "60px" }} /></a>}
            items={[
                <Button size="sm">Home</Button>,
                <Button size="sm">Favorites</Button>,
                <Button size="sm">About</Button>,
                <Dropdown text="Account" size="sm">
                    <li>Profile</li>
                    <li>Friends</li>
                    <li>Logout</li>
                </Dropdown>,
            ]}
        />
}