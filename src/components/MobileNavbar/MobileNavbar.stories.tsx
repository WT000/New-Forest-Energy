import {ComponentMeta, ComponentStory} from "@storybook/react";
import MobileNavbar from "./MobileNavbar";
import { AllHomes, Dashboard, NewReading, AddBooking, Instructions, SignOut, NewHome } from "../NavbarMenuItem/NavbarMenuItem.stories";


export default {
    title: "MobileNavbar",
    component: MobileNavbar,
    
} as ComponentMeta<typeof MobileNavbar>;
  
const Template: ComponentStory<typeof MobileNavbar> = (args) => <MobileNavbar {...args} />;
  
export const DashboardMenu = Template.bind({});

DashboardMenu.args = {
    children: (
        <div>
            <AllHomes {...AllHomes.args} />
            <Dashboard {...Dashboard.args} />
            <NewReading {...NewReading.args} />
            <AddBooking {...AddBooking.args} />
            <Instructions {...Instructions.args} />
            <SignOut {...SignOut.args} />
        </div> 
    )
};