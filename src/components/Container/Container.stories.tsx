import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Container from "./Container";
import Box from "../Box/Box";

const meta: Meta<typeof Container> = {
  component: Container,
  title: "Container",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
    render: () => <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
    <Container size="sm">
        <Box width="100%" height="fit"><>I'm an "sm" container, which means I'll have a width of 100% until sm breakpoint (576px).</></Box>
    </Container>
    <Container size="md">
        <Box width="100%" height="fit"><>I'm an "md" container, which means I'll have a width of 100% until md breakpoint (768px).</></Box>
    </Container>
    <Container size="lg">
        <Box width="100%" height="fit"><>I'm an "lg" container, which means I'll have a width of 100% until lg breakpoint (992px).</></Box>
    </Container>
    <Container size="xl">
        <Box width="100%" height="fit"><>I'm an "xl" container, which means I'll have a width of 100% until xl breakpoint (1200px).</></Box>
    </Container>
    <Container>
        <Box width="100%" height="fit"><>I'm a container with no size set, which means I'll always have a width of 100%.</></Box>
    </Container>
    </div>
}
