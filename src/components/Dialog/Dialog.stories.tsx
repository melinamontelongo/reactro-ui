import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Dialog from "./Dialog";
import Button from "../Button/Button";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: "Dialog",
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = (args) => (
  <Dialog {...args} />
);
Default.args = {
  title: "Default dialog",
  dialogContent: <>
    <p>This is the content of a default dialog box with two default buttons passed as footer.</p>
  </>,
  width: "400px",
  height: "200px",
  footer: <div style={{ display: "flex", flexDirection: "row", justifyContent: "end", gap: "10px" }}>
    <Button size={"lg"}>OK</Button>
    <Button size={"lg"}>Cancel</Button>
  </div>,
};

export const Primary: Story = (args) => (
  <Dialog {...args} />
);
Primary.args = {
  title: "Primary dialog",
  dialogContent: <>
    <p>This is the content of a primary dialog box with two primary buttons passed as footer.</p>
  </>,
  width: "400px",
  height: "200px",
  variant: "primary",
  footer: <div style={{ display: "flex", flexDirection: "row", justifyContent: "end", gap: "10px" }}>
    <Button size={"lg"} variant="primary">OK</Button>
    <Button size={"lg"} variant="primary">Cancel</Button>
  </div>,
};

export const Secondary: Story = (args) => (
  <Dialog {...args} />
);
Secondary.args = {
  title: "Secondary dialog",
  dialogContent: <>
    <p>This is the content of a secondary dialog box with two secondary buttons passed as footer.</p>
  </>,
  width: "400px",
  height: "200px",
  variant: "secondary",
  footer: <div style={{ display: "flex", flexDirection: "row", justifyContent: "end", gap: "10px" }}>
    <Button size={"lg"} variant="secondary">OK</Button>
    <Button size={"lg"} variant="secondary">Cancel</Button>
  </div>,
};

export const Base: Story = (args) => (
  <Dialog {...args} />
);
Base.args = {
  title: "Base dialog",
  dialogContent: <>
    <p>This is the content of a base dialog box with two base buttons passed as footer.</p>
  </>,
  width: "400px",
  height: "200px",
  variant: "base",
  footer: <div style={{ display: "flex", flexDirection: "row", justifyContent: "end", gap: "10px" }}>
    <Button size={"lg"} variant="base">OK</Button>
    <Button size={"lg"} variant="base">Cancel</Button>
  </div>,
};

export const Overflown: Story = (args) => (
  <Dialog {...args} />
);
Overflown.args = {
  title: "Overflown dialog",
  dialogContent: <>
    <p>This is the content of an overflown dialog box.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis ipsa provident totam, dicta dolorem iure corporis expedita? Odio tenetur rem velit explicabo ea fuga et voluptas, rerum perferendis beatae?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit dolor vero iure accusamus illum qui voluptate, porro magnam, ab dolores eaque cum ducimus incidunt quas! Delectus magnam magni blanditiis.</p>
  </>,
  width: "400px",
  height: "200px",

};