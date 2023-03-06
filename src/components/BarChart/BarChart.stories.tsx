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
      date: new Date(2022, 5, 7)
    },
    {
      num: 28,
      date: new Date(2022, 6, 7),
    },
    {
      num: 31.5,
      date: new Date(2022, 7, 7),
    },
    {
      num: 19,
      date: new Date(2022, 8, 7),
    },
  ],
};
