import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "storybook/test";

import { TwoWaySelection } from "./TwoWaySelection";

const submitHandler = fn().mockResolvedValue(undefined);

const meta = {
  title: "Molecules/TwoWaySelection",
  component: TwoWaySelection,
  tags: ["autodocs"],
  args: {
    question: "Which prototype direction should we test next?",
    leftOption: {
      label: "Flow A: guided walkthrough",
      value: "flow-a",
    },
    rightOption: {
      label: "Flow B: free exploration",
      value: "flow-b",
    },
    onSubmit: submitHandler,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Binary choice selector with async submit callback for A/B style prompts.",
      },
    },
  },
} satisfies Meta<typeof TwoWaySelection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SelectAndSubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText("Flow B: free exploration"));
    await userEvent.click(
      canvas.getByRole("button", { name: "Submit choice" }),
    );

    await expect(submitHandler).toHaveBeenCalledWith(
      expect.objectContaining({ answer: "flow-b" }),
    );
  },
};
