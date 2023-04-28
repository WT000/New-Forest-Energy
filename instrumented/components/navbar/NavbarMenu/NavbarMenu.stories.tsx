import {ComponentMeta, ComponentStory} from "@storybook/react";
import NavbarMenu from "./NavbarMenu";
import { AllHomes, Dashboard, NewReading, AddBooking, Instructions, SignOut, NewHome } from "../NavbarMenuItem/NavbarMenuItem.stories";

export default {
    title: "NavbarMenu",
    component: NavbarMenu,
} as ComponentMeta<typeof NavbarMenu>;
  
const Template: ComponentStory<typeof NavbarMenu> = (args) => <NavbarMenu {...args} />;
  
export const DashboardMenu = Template.bind({});
DashboardMenu.args = {
    children: 
        <>
            <AllHomes {...AllHomes.args} />
            <Dashboard {...Dashboard.args} />
            <NewReading {...NewReading.args} />
            <AddBooking {...AddBooking.args} />
            <Instructions {...Instructions.args} />
            <SignOut {...SignOut.args} />
        </>
};

export const HomesMenu = Template.bind({});
HomesMenu.args = {
    children: (
        <>
            <NewHome {...NewHome.args} />
            <SignOut {...SignOut.args} />
        </> 
    )
};

export const GuestMenu = Template.bind({});
GuestMenu.args = {
    children: 
        <>
            <Dashboard {...Dashboard.args} />
            <NewReading {...NewReading.args} />
            <Instructions {...Instructions.args} />
            <SignOut {...SignOut.args} />
        </>
};