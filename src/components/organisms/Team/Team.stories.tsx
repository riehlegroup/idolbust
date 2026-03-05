import type { Meta, StoryObj } from "@storybook/react";

import { Team } from "./Team";
import type { TeamMemberItem } from "./Team.types";

const members: TeamMemberItem[] = [
  {
    name: "Alex Rivera",
    role: "Research Lead",
    bio: "Focuses on qualitative interviews and synthesis.",
    image: "/apple-touch-icon.png",
  },
  {
    name: "Morgan Lee",
    role: "Product Strategist",
    bio: "Translates user needs into product roadmaps.",
  },
  {
    name: "Jamie Patel",
    role: "Data Analyst",
    bio: "Turns telemetry into actionable insights.",
  },
];

const meta = {
  title: "Organisms/Team",
  component: Team,
  tags: ["autodocs"],
  args: {
    title: "Research Team",
    members,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Team roster with member names, roles, bios, and optional imagery.",
      },
    },
  },
} satisfies Meta<typeof Team>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
