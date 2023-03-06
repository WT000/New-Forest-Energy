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
      date: new Date(2022, 5, 7),
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

    {
      num: 32,
      date: new Date(2022, 9, 7),
    },

    {
      num: 17,
      date: new Date(2022, 10, 7),
    },

    {
      num: 10,
      date: new Date(2022, 11, 7),
    },
  ],
};
