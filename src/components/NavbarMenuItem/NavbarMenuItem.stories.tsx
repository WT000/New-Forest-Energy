import {ComponentMeta, ComponentStory} from "@storybook/react";
import NavbarMenuItem from "./NavbarMenuItem";
import {IoIosHome, IoIosPie, IoIosFlash, IoIosCalendar, IoIosList, IoIosLogOut} from "react-icons/io";

export default {
    title: "NavbarMenuItem",
    component: NavbarMenuItem,
} as ComponentMeta<typeof NavbarMenuItem>;
  
const Template: ComponentStory<typeof NavbarMenuItem> = (args) => <NavbarMenuItem {...args} />;
  
export const AllHomes = Template.bind({});
  
AllHomes.args = {
    icon: <IoIosHome />,
    text: "All Homes",
    onClick: console.log("AllHomes")
};

export const Dashboard = Template.bind({});
  
Dashboard.args = {
    icon: <IoIosPie />,
    text: "Dashboard",
    onClick: console.log("Dashboard")
};

export const NewReading = Template.bind({});
  
NewReading.args = {
    icon: <IoIosFlash />,
    text: "New Reading",
    onClick: console.log("NewReading")
};

export const AddBooking = Template.bind({});
  
AddBooking.args = {
    icon: <IoIosCalendar />,
    text: "Add Booking",
    onClick: console.log("AddBooking")
};

export const Instructions = Template.bind({});
  
Instructions.args = {
    icon: <IoIosList />,
    text: "Instructions",
    onClick: console.log("Instructions")
};

export const SignOut = Template.bind({});
  
SignOut.args = {
    icon: <IoIosLogOut />,
    text: "Sign Out",
    onClick: console.log("SignOut")
};
