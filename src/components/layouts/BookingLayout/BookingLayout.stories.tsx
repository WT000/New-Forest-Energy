import {ComponentMeta, ComponentStory} from "@storybook/react";
import BookingLayout from "./BookingLayout";

export default {
    title: "BookingLayout",
    component: BookingLayout,
} as ComponentMeta<typeof BookingLayout>;
  
const Template: ComponentStory<typeof BookingLayout> = (args) => <BookingLayout {...args} />;
  
export const Booking1 = Template.bind({});
Booking1.args = {
    cost: 12.45,
    duration: 4,
    dateRange: "15th - 19th Feb"
};

export const Booking2 = Template.bind({});
Booking2.args = {
    cost: 3.65,
    duration: 2,
    dateRange: "7th - 9th Feb"
};

export const Booking3 = Template.bind({});
Booking3.args = {
    cost: 8.45,
    duration: 7,
    dateRange: "10th - 17th Feb"
};