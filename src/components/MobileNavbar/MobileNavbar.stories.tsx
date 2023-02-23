import {ComponentMeta, ComponentStory} from "@storybook/react";
import MobileNavbar from "./MobileNavbar";
import { DashboardMenu, HomesMenu } from "../NavbarMenu/NavbarMenu.stories";

export default {
    title: "MobileNavbar",
    component: MobileNavbar,
} as ComponentMeta<typeof MobileNavbar>;
  
const Template: ComponentStory<typeof MobileNavbar> = (args) => <MobileNavbar {...args} />;
  
export const HomeOwnerAgency = Template.bind({});

HomeOwnerAgency.args = {
    menu: <DashboardMenu {...DashboardMenu.args} />

};

HomeOwnerAgency.parameters = {
    viewport: {
        defaultViewport: "iphone6"
    }
}

export const HomesAgency = Template.bind({});

HomesAgency.args = {
    menu: <HomesMenu {...HomesMenu.args} />
};

HomesAgency.parameters = {
    viewport: {
        defaultViewport: "iphone6"
    }
}
