import {ComponentMeta, ComponentStory} from "@storybook/react";
import DesktopNavbar from "./DesktopNavbar";
import { HomeMenu, HomesMenu } from "../NavbarMenu/NavbarMenu.stories";
import { Buffer, Tariff, Homes, Bookings3mo, Bookings12mo } from "../NavbarStats/NavbarStats.stories";

export default {
    title: "DesktopNavbar",
    component: DesktopNavbar,
} as ComponentMeta<typeof DesktopNavbar>;
  
const Template: ComponentStory<typeof DesktopNavbar> = (args) => <DesktopNavbar {...args} />;
  
export const HomeOwnerAgency = Template.bind({});

HomeOwnerAgency.args = {
    welcomeMessage: "Welcome to",
    welcomeName: "Beau Soleil",
    image: "/stories/home.jpg",
    stats: (
        <a>
            <Buffer {...Buffer.args} />
            <Tariff {...Tariff.args} />
        </a>
    ),
    menu: <HomeMenu {...HomeMenu.args} />
};

export const HomesAgency = Template.bind({});

HomesAgency.args = {
    welcomeMessage: "Welcome back",
    welcomeName: "Rachel",
    image: "/stories/rachel.jpeg",
    stats: (
        <a>
            <Homes {...Homes.args} />
            <Bookings3mo {...Bookings3mo.args} />
            <Bookings12mo {...Bookings12mo.args} />
        </a>
    ),
    menu: <HomesMenu {...HomesMenu.args} />
};