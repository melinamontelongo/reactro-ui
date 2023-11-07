import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
    title: "Accordion",
    tags: ["autodocs"],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Accordions: Story = {
    render: () => <div>
        <div>
            <h2>Variants</h2>
            <Accordion text="Default accordion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nesciunt iste, qui sed obcaecati alias eveniet, velit dolorum ullam voluptates odit ad numquam quas, minima distinctio fuga non ipsam aliquid.</Accordion>

            <Accordion variant="primary" text="Primary accordion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nesciunt iste, qui sed obcaecati alias eveniet, velit dolorum ullam voluptates odit ad numquam quas, minima distinctio fuga non ipsam aliquid.</Accordion>

            <Accordion variant="secondary" text="Secondary accordion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nesciunt iste, qui sed obcaecati alias eveniet, velit dolorum ullam voluptates odit ad numquam quas, minima distinctio fuga non ipsam aliquid.</Accordion>

            <Accordion variant="base" text="Base accordion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nesciunt iste, qui sed obcaecati alias eveniet, velit dolorum ullam voluptates odit ad numquam quas, minima distinctio fuga non ipsam aliquid.</Accordion>
        </div>

        <div>
            <h2>Sizes</h2>

            <Accordion size="sm" text="Small accordion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nesciunt iste, qui sed obcaecati alias eveniet, velit dolorum ullam voluptates odit ad numquam quas, minima distinctio fuga non ipsam aliquid.</Accordion>

            <Accordion size="md" text="Medium accordion (default)">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nesciunt iste, qui sed obcaecati alias eveniet, velit dolorum ullam voluptates odit ad numquam quas, minima distinctio fuga non ipsam aliquid.</Accordion>

            <Accordion size="lg" text="Large accordion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nesciunt iste, qui sed obcaecati alias eveniet, velit dolorum ullam voluptates odit ad numquam quas, minima distinctio fuga non ipsam aliquid.</Accordion>
        </div>

        <div>
            <h2>Different widths</h2>
            <Accordion text="100% width accordion (default)">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nesciunt iste, qui sed obcaecati alias eveniet, velit dolorum ullam voluptates odit ad numquam quas, minima distinctio fuga non ipsam aliquid.</Accordion>

            <Accordion width="300px" text="300px width accordion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nesciunt iste, qui sed obcaecati alias eveniet, velit dolorum ullam voluptates odit ad numquam quas, minima distinctio fuga non ipsam aliquid.</Accordion>

            <Accordion width="50%" text="50% width accordion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nesciunt iste, qui sed obcaecati alias eveniet, velit dolorum ullam voluptates odit ad numquam quas, minima distinctio fuga non ipsam aliquid.</Accordion>

            <Accordion width="40rem" text="40rem width accordion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nesciunt iste, qui sed obcaecati alias eveniet, velit dolorum ullam voluptates odit ad numquam quas, minima distinctio fuga non ipsam aliquid.</Accordion>
        </div>
    </div>
};