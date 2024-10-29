import { StoryFn, Meta } from "@storybook/react";
import AccountingIcon from "./AccountingIcon";

export default {
  title: "Icons/AccountingIcon",
  component: AccountingIcon,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large", "extralarge"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["black", "white", "red", "green", "blue", "gray"],
      },
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof AccountingIcon>;

const Template: StoryFn<typeof AccountingIcon> = (args) => (
  <AccountingIcon {...args} />
);

export const Small = Template.bind({});
Small.args = {
  size: "small",
  color: "black",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  color: "black",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  color: "black",
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: "extraLarge",
  color: "black",
};

export const Red = Template.bind({});
Red.args = {
  size: "medium",
  color: "red",
};

export const Green = Template.bind({});
Green.args = {
  size: "medium",
  color: "green",
};

export const Blue = Template.bind({});
Blue.args = {
  size: "medium",
  color: "blue",
};

export const Gray = Template.bind({});
Gray.args = {
  size: "medium",
  color: "gray",
};
