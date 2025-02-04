import type { Meta, StoryObj } from "@storybook/react";
import { InputPrice } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "component/InputPrice",
  component: InputPrice,
} satisfies Meta<typeof InputPrice>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};
