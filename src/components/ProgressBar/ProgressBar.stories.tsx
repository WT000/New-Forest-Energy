import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProgressBar from "./ProgressBar";

export default {
  title: "ProgressBar",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Bar1 = Template.bind({});

Bar1.args = {
  num1: 8.34,
  num2: 10.36,
  text1: "Buffer",
  text2: "Average per Day",
};

export const Bar2 = Template.bind({});

Bar2.args = {
  num1: 3.43,
  num2: 13.36,
  text1: "Buffer",
  text2: "Average per Day",
};
