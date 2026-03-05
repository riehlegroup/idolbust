import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./Footer";

const meta = {
  title: "Organisms/Footer",
  component: Footer,
  tags: ["autodocs"],
  args: {
    siteName: "Idol or Bust",
    licenseText: "Licensed under AGPL-3.0.",
  },
  parameters: {
    docs: {
      description: {
        component:
          "Site footer with branding and licensing text for consistent page endings.",
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
