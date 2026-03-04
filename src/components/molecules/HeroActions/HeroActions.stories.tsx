import type { Meta, StoryObj } from "@storybook/react";

import { HeroActions } from "@/components/molecules/HeroActions";
import { Button } from "@/components/atoms/Button";

const meta: Meta<typeof HeroActions> = {
  title: "Molecules/HeroActions",
  component: HeroActions,
  args: {
    primary: (
      <Button href="/about" variant="primary" size="lg">
        Learn More
      </Button>
    ),
    secondary: (
      <Button href="/blog" variant="outline" size="lg">
        Read Blog
      </Button>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof HeroActions>;

export const Default: Story = {};
