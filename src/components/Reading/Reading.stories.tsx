import {ComponentMeta, ComponentStory} from "@storybook/react";
import Reading from "./Reading";

export default {
    title: "Reading",
    component: Reading,
} as ComponentMeta<typeof Reading>;
  
const Template: ComponentStory<typeof Reading> = (args) => <Reading {...args} />;

export const SimpleReading = Template.bind({})
SimpleReading.args = {
    creator: "Guest",
    kwhValue: 5,
    image: "",
    createdAt: new Date(),
    onClick: () => {console.log("click")}
}
