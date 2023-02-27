import {ComponentMeta, ComponentStory} from "@storybook/react";
import Stats from "./Stats";


export default {
    title: "Stats",
    component: Stats,
} as ComponentMeta<typeof Stats>;
  
const Template: ComponentStory<typeof Stats> = (args) => <Stats {...args} />;
  
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

export const MobileCost = Template.bind({});
MobileCost.args = {
    stat: "£1.77",
    text: "Total Cost (minus Buffer)",
};

export const MobileUsage = Template.bind({});
MobileUsage.args = {
    stat: "27.2 kWh",
    text: "Total Usage",
};

export const MobileTariff = Template.bind({});
MobileTariff.args = {
    stat: "23p",
    text: "Current Tariff (per kWh)",
};