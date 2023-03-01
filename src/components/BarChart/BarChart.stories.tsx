import {ComponentMeta, ComponentStory} from "@storybook/react";
import BarChart from "./BarChart";


export default {
    title: "BarChart",
    component: BarChart,
} as ComponentMeta<typeof BarChart>;
  
const Template: ComponentStory<typeof BarChart> = (args) => <BarChart />;
  
export const Bar1 = Template.bind({});





