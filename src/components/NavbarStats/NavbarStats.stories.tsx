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
    text: "Cost Buffer (Daily)"
};

export const Tariff = Template.bind({});
  
Tariff.args = {
    stats: "23p",
    text: "Current Tariff (per kWh)"
};