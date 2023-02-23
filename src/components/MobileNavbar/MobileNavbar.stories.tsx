import {ComponentMeta, ComponentStory} from "@storybook/react";
import MobileNavbar from "./MobileNavbar";
import { DashboardMenu, HomesMenu } from "../NavbarMenu/NavbarMenu.stories";

export default {
    title: "MobileNavbar",
    component: MobileNavbar,
    parameters: {
        viewport: {
          defaultViewport: 'iphone5',
        },
      },
} as ComponentMeta<typeof MobileNavbar>;
  
const Template: ComponentStory<typeof MobileNavbar> = (args) => <MobileNavbar {...args} />;
  
export const HomeOwnerAgency = Template.bind({});

HomeOwnerAgency.args = {
    menu: <DashboardMenu {...DashboardMenu.args} />

};

export const HomesAgency = Template.bind({});

HomesAgency.args = {
    menu: <HomesMenu {...HomesMenu.args} />
};

