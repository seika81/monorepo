import type { Meta, StoryObj } from "@storybook/react";
import { Price } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ui/Price",
  component: Price,
} satisfies Meta<typeof Price>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    value: 900,
  },
};
