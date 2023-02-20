import {ComponentMeta, ComponentStory} from "@storybook/react";
import NavbarMenuItem from "./NavbarMenuItem";
import {IoHome, IoPieChart, IoFlash, IoCalendar, IoList, IoLogOut, IoAdd} from "react-icons/io5";

export default {
    title: "NavbarMenuItem",
    component: NavbarMenuItem,
} as ComponentMeta<typeof NavbarMenuItem>;
  
const Template: ComponentStory<typeof NavbarMenuItem> = (args) => <NavbarMenuItem {...args} />;
  
export const AllHomes = Template.bind({});
  
AllHomes.args = {
    icon: <IoHome />,
    text: "All Homes",
    onClick: () => console.log("AllHomes")
};

export const Dashboard = Template.bind({});
  
Dashboard.args = {
    icon: <IoPieChart />,
    text: "Dashboard",
    onClick: () => console.log("Dashboard")
};

export const NewReading = Template.bind({});
  
NewReading.args = {
    icon: <IoFlash />,
    text: "New Reading",
    onClick: () => console.log("NewReading")
};

export const AddBooking = Template.bind({});
  
AddBooking.args = {
    icon: <IoCalendar />,
    text: "Add Booking",
    onClick: () => console.log("AddBooking")
};

export const Instructions = Template.bind({});
  
Instructions.args = {
    icon: <IoList />,
    text: "Instructions",
    onClick: () => console.log("Instructions")
};

export const SignOut = Template.bind({});
  
SignOut.args = {
    icon: <IoLogOut />,
    text: "Sign Out",
    onClick: () => console.log("SignOut")
};

export const NewHome = Template.bind({});
  
NewHome.args = {
    icon: <IoAdd />,
    text: "New Home",
    onClick: () => console.log("NewHome")
};
