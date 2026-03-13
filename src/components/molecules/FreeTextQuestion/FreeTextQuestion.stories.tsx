import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "storybook/test";

import { FreeTextQuestion } from "./FreeTextQuestion";

const submitHandler = fn().mockResolvedValue(undefined);

const meta = {
  title: "Molecules/FreeTextQuestion",
  component: FreeTextQuestion,
  tags: ["autodocs"],
  args: {
    question: "What is the biggest blocker in your current research process?",
    minLength: 10,
    onSubmit: submitHandler,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Open-text response form with minimum length validation and async submit callback.",
      },
    },
  },
} satisfies Meta<typeof FreeTextQuestion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WriteAndSubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(
      canvas.getByRole("textbox", {
        name: "What is the biggest blocker in your current research process?",
      }),
      "Scheduling participants quickly is hard for us.",
    );
    await userEvent.click(
      canvas.getByRole("button", { name: "Submit answer" }),
    );

    await expect(submitHandler).toHaveBeenCalledWith(
      expect.objectContaining({
        answer: "Scheduling participants quickly is hard for us.",
      }),
    );
  },
};
