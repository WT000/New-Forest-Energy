import { ComponentMeta, ComponentStory } from "@storybook/react";
import BarChart from "./BarChart";

export default {
  title: "BarChart",
  component: BarChart,
} as ComponentMeta<typeof BarChart>;

const Template: ComponentStory<typeof BarChart> = (args) => (
  <BarChart {...args} />
);

export const Bar1 = Template.bind({});

Bar1.args = {
  datalist: [
    {
      num: 27,
      date: "23 November",
    },
    {
      num: 28,
      date: "24 November",
    },
    {
      num: 31.5,
      date: "25 November",
    },
    {
      num: 19,
      date: "26 November",
    },
  ],
};
