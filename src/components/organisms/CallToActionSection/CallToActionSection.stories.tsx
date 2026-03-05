import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";

import { Button } from "@/components/atoms/Button";
import { CallToActionSection } from "./CallToActionSection";

const meta = {
  title: "Organisms/CallToActionSection",
  component: CallToActionSection,
  tags: ["autodocs"],
  args: {
    title: "Ready to get started?",
    description:
      "Join us in building better research tools for understanding user needs.",
    action: (
      <Button href="/about" variant="secondary" size="lg" className="mt-6">
        About Us
      </Button>
    ),
  },
  parameters: {
    docs: {
      description: {
        component:
          "Call-to-action block with headline, supporting copy, and a primary action.",
      },
    },
  },
} satisfies Meta<typeof CallToActionSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ActionButtonLink: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link", { name: "About Us" });
    link.addEventListener("click", (event) => event.preventDefault());
    await userEvent.click(link);
    await expect(link).toHaveAttribute("href", "/about");
  },
};
