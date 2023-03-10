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
  rawData: [
    {
      "value": 100,
      "createdAt": new Date("2015-05-01T10:02:03.839Z"),
    },
    {
      "value": 102,
      "createdAt": new Date("2015-05-02T10:02:03.839Z"),
    },
    {
      "value": 110,
      "createdAt": new Date("2015-05-03T10:02:03.839Z"),
    },
    {
      "value": 125,
      "createdAt": new Date("2015-05-04T10:02:03.839Z"),
    },
    {
      "value": 70,
      "createdAt": new Date("2015-05-05T10:02:03.839Z"),
    },
    {
      "value": 130,
      "createdAt": new Date("2015-05-06T10:02:03.839Z"),
    }

  ],
};
