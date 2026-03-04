import type { Meta, StoryObj } from "@storybook/react";

import { CallToActionSection } from "@/components/organisms/CallToActionSection";
import { Button } from "@/components/atoms/Button";

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
} satisfies Meta<typeof CallToActionSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
