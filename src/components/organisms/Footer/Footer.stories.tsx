import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "@/components/organisms/Footer";

const meta = {
  title: "Organisms/Footer",
  component: Footer,
  tags: ["autodocs"],
  args: {
    siteName: "Idol or Bust",
    licenseText: "Licensed under AGPL-3.0.",
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
