import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";
import Input from "./../Input/Input";
const meta: Meta<typeof Dropdown> = {
    component: Dropdown,
    title: "Dropdown",
    tags: ["autodocs"],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Dropdowns: Story = {
    render: () => <div>
        <div>
            <h2>Variants</h2>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <Dropdown text="Default">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </Dropdown>
                <Dropdown text="Primary" variant="primary" >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </Dropdown>
                <Dropdown text="Secondary" variant="secondary" >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </Dropdown>
                <Dropdown text="Base" variant="base">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </Dropdown>
            </div>
        </div>
        <div>
            <h2>Sizes</h2>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <Dropdown text="Small" size="sm">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </Dropdown>
                <Dropdown text="Medium" size="md">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </Dropdown>
                <Dropdown text="Large" size="lg">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </Dropdown>
            </div>
        </div>
        <div>
            <h2>Anything can live inside a dropdown...</h2>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <Dropdown text="A paragraph" isList={false}>
                    <p>
                        Dropdowns render an unordered list by default,
                        but by passing the isList prop set to false you can include just anything
                        without the list item styles.
                    </p>
                </Dropdown>
                <Dropdown text="An input" isList={false}>
                        <Input type="text" label="Yippee-ki-yay..." placeholder="..." />
                </Dropdown>
                <Dropdown text="A pigeon"  isList={false}>
                    <p>Shh... It's sleeping!</p>
                    <img width={200} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/A_sleeping_pigeon.JPG/800px-A_sleeping_pigeon.JPG?20110904204145" alt="A sleeping pigeon"/>
                </Dropdown>
            </div>
        </div>
    </div>
};