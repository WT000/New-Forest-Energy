import {ComponentMeta, ComponentStory} from "@storybook/react";
import NavbarStats from "./NavbarStats";


export default {
    title: "NavbarStats",
    component: NavbarStats,
} as ComponentMeta<typeof NavbarStats>;
  
const Template: ComponentStory<typeof NavbarStats> = (args) => <NavbarStats {...args} />;
  
export const Buffer = Template.bind({});
  
Buffer.args = {
    stats: "£4.50",
    text1: "Cost Buffer (Daily)"
};

export const Tariff = Template.bind({});
  
Tariff.args = {
    stats: "23p",
    text1: "Current Tariff",
    text2: "(per kWh)",
};

export const Homes = Template.bind({});
  
Homes.args = {
    stats: "47",
    text1: "Homes",
};

export const Bookings3mo = Template.bind({});
  
Bookings3mo.args = {
    stats: "21",
    text1: "Bookings",
    text2: "(Last 3 months)",
};

export const Bookings12mo = Template.bind({});
  
Bookings12mo.args = {
    stats: "124",
    text1: "Bookings",
    text2: "(Last 12 months)",
};