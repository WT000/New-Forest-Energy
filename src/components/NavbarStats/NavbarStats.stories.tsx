import {ComponentMeta, ComponentStory} from "@storybook/react";
import NavbarStats from "./NavbarStats";


export default {
    title: "NavbarStats",
    component: NavbarStats,
} as ComponentMeta<typeof NavbarStats>;
  
const Template: ComponentStory<typeof NavbarStats> = (args) => <NavbarStats {...args} />;
  
export const Buffer = Template.bind({});
  
Buffer.args = {
    stat: "£4.50",
    text: "Cost Buffer (Daily)"
};

export const Tariff = Template.bind({});
  
Tariff.args = {
    stat: "23p",
    text: "Current Tariff (per kWh)",
};

export const Homes = Template.bind({});
  
Homes.args = {
    stat: "47",
    text: "Homes",
};

export const Bookings3mo = Template.bind({});
  
Bookings3mo.args = {
    stat: "21",
    text: "Bookings (Last 3 months)",
};

export const Bookings12mo = Template.bind({});
  
Bookings12mo.args = {
    stat: "124",
    text: "Bookings (Last 12 months)",

};