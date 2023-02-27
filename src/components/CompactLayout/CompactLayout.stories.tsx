import {ComponentMeta, ComponentStory} from "@storybook/react";
import CompactLayout from "./CompactLayout";
import { IoTrendingDown, IoTrendingUp } from "react-icons/io5";

export default {
    title: "CompactLayout",
    component: CompactLayout,
} as ComponentMeta<typeof CompactLayout>;
  
const Template: ComponentStory<typeof CompactLayout> = (args) => <CompactLayout {...args} />;
  
export const TrendingUp = Template.bind({});
TrendingUp.args = {
    icon: <IoTrendingUp size="34px" className="text-green-500"/>,
    textLine1: "vs Last Month",
    textLine2: "12% more"
};

export const TrendingDown = Template.bind({});
TrendingDown.args = {
    icon: <IoTrendingDown size="34px" className="text-orange"/>,
    textLine1: "vs Other Homes",
    textLine2: "10% less"
};