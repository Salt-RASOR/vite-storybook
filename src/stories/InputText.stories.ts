import type { Meta, StoryObj } from "@storybook/react";

import InputText from "../components/InputText";

const meta = {
  title: "InputText",
  component: InputText,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    inputName: "Name",
    placeholder: "John Doe",
  },
};

export const Error: Story = {
  args: {
    inputName: "Name",
    placeholder: "John Doe",
    isError: true,
  },
};

export const Password: Story = {
  args: {
    inputName: "Password",
    placeholder: "",
    inputType: "password",
  },
};
