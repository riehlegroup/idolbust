import type { Meta, StoryObj } from "@storybook/react";

import { ResourceCanonicalLink } from "./ResourceCanonicalLink";

const meta = {
  title: "Molecules/ResourceCanonicalLink",
  component: ResourceCanonicalLink,
  args: {
    canonicalLabel: "Canonical source:",
    canonicalUrl: "https://example.com/resources/interview-guide",
  },
  parameters: {
    docs: {
      description: {
        component:
          "Small link block that points to the canonical source for a resource.",
      },
    },
  },
} satisfies Meta<typeof ResourceCanonicalLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
