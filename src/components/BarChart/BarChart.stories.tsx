import {ComponentMeta, ComponentStory} from "@storybook/react";
import BarChart from "./BarChart";


export default {
    title: "BarChart",
    component: BarChart,
} as ComponentMeta<typeof BarChart>;
  
const Template: ComponentStory<typeof BarChart> = (args) => <BarChart {...args}/>;

  
export const Bar1 = Template.bind({});




Bar1.args = {

    datalist: [
        {
            num: 27,
            date: '23'
        },
        {
            num: 28,
            date: '24'
        },
        {
            num: 31,
            date: '25'
        },
        {
            num: 19,
            date: '26'
        }
    ],



};





