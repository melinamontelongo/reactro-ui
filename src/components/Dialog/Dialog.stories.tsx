import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Dialog from "./Dialog";
import Button from "../Button/Button";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: "Dialog",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = (args) => (
  <Dialog {...args} />
);
Default.args = {
  title: "Default dialog",
  content: <>
    <p>This is the content of a default dialog box with two buttons passed as footer.</p>
  </>,
  width: "400px",
  height: "200px",
  footer: <div style={{ display: "flex", flexDirection: "row", justifyContent: "end", gap: "10px" }}>
    <Button size={"lg"} text={"OK"} />
    <Button size={"lg"} text={"Cancel"} />
  </div>,
};
