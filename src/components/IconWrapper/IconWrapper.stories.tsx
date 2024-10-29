import { StoryFn } from "@storybook/react";
import IconWrapper from "./IconWrapper";

export default {
  title: "Templates/IconWrapper",
  component: IconWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Template: StoryFn<typeof IconWrapper> = (args) => (
  <IconWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {};
