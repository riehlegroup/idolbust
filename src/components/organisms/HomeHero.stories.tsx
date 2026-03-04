import type { Meta, StoryObj } from "@storybook/react";

import { HomeHero } from "@/components/organisms/HomeHero";
import { Button } from "@/components/atoms/Button";

const meta: Meta<typeof HomeHero> = {
  title: "Organisms/HomeHero",
  component: HomeHero,
  args: {
    title: "Understanding Your",
    highlight: "User Needs",
    description:
      "Simple website software for research projects that want to understand their user needs through modern methodologies and tools.",
    primaryAction: (
      <Button href="/about" variant="primary" size="lg">
        Learn More
      </Button>
    ),
    secondaryAction: (
      <Button href="/blog" variant="outline" size="lg">
        Read Blog
      </Button>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof HomeHero>;

export const Default: Story = {};
