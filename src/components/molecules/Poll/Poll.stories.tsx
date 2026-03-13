import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";

import { Poll } from "./Poll";

const meta = {
  title: "Molecules/Poll",
  component: Poll,
  tags: ["autodocs"],
  args: {
    question: "Which interview format gives better insights for your team?",
    options: ["In-person sessions", "Remote moderated sessions"],
  },
  parameters: {
    docs: {
      description: {
        component:
          "Single-choice poll with async submit callback and validation for required selection.",
      },
    },
  },
} satisfies Meta<typeof Poll>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SelectAndSubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText("In-person sessions"));
    await userEvent.click(canvas.getByRole("button", { name: "Submit vote" }));

    await expect(
      canvas.getByText("Thanks. Your vote was logged."),
    ).toBeVisible();
  },
};
