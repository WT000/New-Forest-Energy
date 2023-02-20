import {ComponentMeta, ComponentStory} from "@storybook/react";
import NavbarMenuItem from "./NavbarMenuItem";
import {IoIosHome, IoIosPie} from "react-icons/io";

export default {
    title: "NavbarMenuItem",
    component: NavbarMenuItem,
} as ComponentMeta<typeof NavbarMenuItem>;
  
const Template: ComponentStory<typeof NavbarMenuItem> = (args) => <NavbarMenuItem {...args} />;
  
export const AllHomes = Template.bind({});
  
AllHomes.args = {
    icon: <IoIosHome />,
    text: "All Homes",
    onClick: console.log("all homes")
};

export const Dashboard = Template.bind({});
  
Dashboard.args = {
    icon: <IoIosPie />,
    text: "Dashboard",
    onClick: console.log("dashboard")
};