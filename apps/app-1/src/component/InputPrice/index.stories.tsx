import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { InputPrice } from "./index";

const meta = {
  title: "component/InputPrice",
  component: InputPrice,
} satisfies Meta<typeof InputPrice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId('write'), "123");
    await expect(canvas.getByText('123')).toBeInTheDocument();
  },
};
