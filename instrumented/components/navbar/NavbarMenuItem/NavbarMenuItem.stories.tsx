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
    path: "/temp",
    onClick: () => console.log("AllHomes"),
    activePage: false,
};

export const Dashboard = Template.bind({});
  
Dashboard.args = {
    icon: <IoPieChart />,
    text: "Dashboard",
    path: "/temp",
    onClick: () => console.log("Dashboard"),
    activePage: true,
};

export const NewReading = Template.bind({});
  
NewReading.args = {
    icon: <IoFlash />,
    text: "New Reading",
    path: "/temp",
    onClick: () => console.log("NewReading"),
    activePage: false,
};

export const AddBooking = Template.bind({});
  
AddBooking.args = {
    icon: <IoCalendar />,
    text: "Add Booking",
    path: "/temp",
    onClick: () => console.log("AddBooking"),
    activePage: false,
};

export const Instructions = Template.bind({});
  
Instructions.args = {
    icon: <IoList />,
    text: "Instructions",
    path: "/temp",
    onClick: () => console.log("Instructions"),
    activePage: false,
};

export const SignOut = Template.bind({});
  
SignOut.args = {
    icon: <IoLogOut />,
    text: "Sign Out",
    path: "/temp",
    onClick: () => console.log("SignOut"),
    activePage: false,
};

export const NewHome = Template.bind({});
  
NewHome.args = {
    icon: <IoAdd />,
    text: "New Home",
    path: "/temp",
    onClick: () => console.log("NewHome"),
    activePage: false,
};
