import { ComponentMeta, ComponentStory } from "@storybook/react";
import BarChart, { ChartDateType } from "./BarChart";



export default {
  title: "BarChart",
  component: BarChart,
} as ComponentMeta<typeof BarChart>;

const Template: ComponentStory<typeof BarChart> = (args) => (
  <BarChart {...args} />
);

const basicReadings = [
  {
    "value": 100,
    "createdAt": new Date("2014-05-01T10:02:03.839Z"),
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
    "createdAt": new Date("2020-05-06T10:02:03.839Z"),
  }
]

export const Bar_BeginAtZero_DayMonth = Template.bind({});

Bar_BeginAtZero_DayMonth.args = {
  beginAtZero: true,
  dateType: ChartDateType.DayMonth,
  unitOfMeasure: "kWh",
  rawData: basicReadings,
};


export const Bar_NotAtZero_MonthYear = Template.bind({});
Bar_NotAtZero_MonthYear.args = {
  beginAtZero: false,
  dateType: ChartDateType.MonthYear,
  unitOfMeasure: "",
  rawData: basicReadings,
};

export const Bar_NotAtZero_MonthYear_Diff = Template.bind({});
Bar_NotAtZero_MonthYear_Diff.args = {
  beginAtZero: false,
  dateType: ChartDateType.DayMonth,
  unitOfMeasure: "",
  rawData: basicReadings,
  showDifference: true
};