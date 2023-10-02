import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Box from "./Box";

const meta: Meta<typeof Box> = {
  component: Box,
  title: "Box",
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Box>;

export const Boxes: Story = {
  render: () => <>
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <Box width="10rem" height="15rem" children={<>I'm a default box.</>} />
      <Box width="10rem" height="15rem" variant="primary" children={<>I'm a primary box</>} />
      <Box width="10rem" height="15rem" variant="secondary" children={<>I'm a secondary box</>} />
      <Box width="10rem" height="15rem" variant="base" children={<>I'm a base box</>} />
    </div>
    <div style={{ display: "flex", gap: "10px" }}>
      <Box width="10rem" height="15rem" children={<>I'm an overflown default box... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, voluptatem voluptates ut natus aperiam commodi. Esse aperiam consectetur, adipisci repudiandae quod nihil eius beatae doloremque. Voluptate blanditiis cupiditate aperiam consectetur.</>} />
      <Box width="10rem" height="15rem" variant="primary" children={<>I'm an overflown primary box... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, voluptatem voluptates ut natus aperiam commodi. Esse aperiam consectetur, adipisci repudiandae quod nihil eius beatae doloremque. Voluptate blanditiis cupiditate aperiam consectetur.</>} />
      <Box width="10rem" height="15rem" variant="secondary" children={<>I'm an overflown secondary box... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, voluptatem voluptates ut natus aperiam commodi. Esse aperiam consectetur, adipisci repudiandae quod nihil eius beatae doloremque. Voluptate blanditiis cupiditate aperiam consectetur.</>} />
      <Box width="10rem" height="15rem" variant="base" children={<>I'm an overflown base box... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, voluptatem voluptates ut natus aperiam commodi. Esse aperiam consectetur, adipisci repudiandae quod nihil eius beatae doloremque. Voluptate blanditiis cupiditate aperiam consectetur.</>} />
    </div></>
};