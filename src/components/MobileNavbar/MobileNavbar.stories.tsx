import {ComponentMeta, ComponentStory} from "@storybook/react";
import MobileNavbar from "./MobileNavbar";
import { DashboardMenu } from "../NavbarMenu/NavbarMenu.stories";
import { AllHomes, Dashboard, NewReading, AddBooking, Instructions, SignOut, NewHome } from "../NavbarMenuItem/NavbarMenuItem.stories";


export default {
    title: "MobileNavbar",
    component: MobileNavbar,
} as ComponentMeta<typeof MobileNavbar>;
  
const Template: ComponentStory<typeof MobileNavbar> = (args) => <MobileNavbar {...args} />;
  
export const HomeOwnerAgency = Template.bind({});

HomeOwnerAgency.args = {
    menu: <DashboardMenu {...DashboardMenu.args} />

};