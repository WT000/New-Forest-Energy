import {ComponentMeta, ComponentStory} from "@storybook/react";
import NavbarMenu from "./NavbarMenu";
import { AllHomes, Dashboard, NewReading } from "../NavbarMenuItem/NavbarMenuItem.stories";

export default {
    title: "NavbarMenu",
    component: NavbarMenu,
} as ComponentMeta<typeof NavbarMenu>;
  
const Template: ComponentStory<typeof NavbarMenu> = (args) => <NavbarMenu {...args} />;
  
export const Menu = Template.bind({});

Menu.args = {
    menuItems: (
        <div>
            <AllHomes {...AllHomes.args} />
            <Dashboard {...Dashboard.args} />
            <NewReading {...NewReading.args} />
        </div> 
    )
};