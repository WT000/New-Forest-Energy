import {ComponentMeta, ComponentStory} from "@storybook/react";
import ProgressBar from "./ProgressBar";


export default {
    title: "ProgressBar",
    component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;
  
const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;
  
export const Bar1 = Template.bind({});

Bar1.args = {
    smallnum: 8.34,
    largenum: 10.36,
    text1: "Buffer",
    text2: "Average per Day"

};

