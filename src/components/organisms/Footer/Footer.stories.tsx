import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "@/components/organisms/Footer";

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  args: {
    siteName: "Idol or Bust",
    licenseText: "Licensed under AGPL-3.0.",
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
