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