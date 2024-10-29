import { StoryFn } from "@storybook/react";

import AnalyticsIcon from "./AnalyticsIcon";

export default {
  title: "Icons/AnalyticsIcon",
  component: AnalyticsIcon,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large", "extra-large"],
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
    layout: 'centered',
  },
  tags: ["autodocs"],
};

const Template: StoryFn<typeof AnalyticsIcon> = (args) => (
  <AnalyticsIcon {...args} />
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
  size: "extra-large",
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

