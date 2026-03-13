import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "storybook/test";

import { SubscriptionForm } from "./SubscriptionForm";

const submitHandler = fn().mockResolvedValue(undefined);

const meta = {
  title: "Molecules/SubscriptionForm",
  component: SubscriptionForm,
  tags: ["autodocs"],
  args: {
    onSubmit: submitHandler,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Email capture form with async submit callback and client-side validation.",
      },
    },
  },
} satisfies Meta<typeof SubscriptionForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SubmitEmail: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(
      canvas.getByRole("textbox", { name: "Email address" }),
      "participant@example.org",
    );
    await userEvent.click(canvas.getByRole("button", { name: "Subscribe" }));

    await expect(submitHandler).toHaveBeenCalledWith(
      expect.objectContaining({ email: "participant@example.org" }),
    );
  },
};
