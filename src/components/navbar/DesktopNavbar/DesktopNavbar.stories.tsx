import {ComponentMeta, ComponentStory} from "@storybook/react";
import DesktopNavbar from "./DesktopNavbar";
import { DashboardMenu, HomesMenu, GuestMenu } from "../NavbarMenu/NavbarMenu.stories";
import { Buffer, Tariff, Homes, Bookings3mo, Bookings12mo, TotalUsage, TotalCost } from "../../Stats/Stats.stories";

export default {
    title: "DesktopNavbar",
    component: DesktopNavbar,
} as ComponentMeta<typeof DesktopNavbar>;
  
const Template: ComponentStory<typeof DesktopNavbar> = (args) => <DesktopNavbar {...args} />;
  
export const HomeOwnerAgency = Template.bind({});
HomeOwnerAgency.args = {
    text: "Welcome to, Beau Soleil",
    image: "/stories/home.jpg",
    children: (
        <a>
            <Buffer {...Buffer.args} />
            <Tariff {...Tariff.args} />
        </a>
    ),
    menu: <DashboardMenu {...DashboardMenu.args} />
};

export const HomesAgency = Template.bind({});
HomesAgency.args = {
    text: "Welcome back, Rachel",
    image: "/stories/rachel.jpeg",
    children: (
        <a>
            <Homes {...Homes.args} />
            <Bookings3mo {...Bookings3mo.args} />
            <Bookings12mo {...Bookings12mo.args} />
        </a>
    ),
    menu: <HomesMenu {...HomesMenu.args} />
};

export const GuestBooking = Template.bind({});
GuestBooking.args = {
    text: "Welcome to, Beau Soleil",
    image: "/stories/home.jpg",
    children: (
        <a>
            <TotalCost {...TotalCost.args} />
            <TotalUsage {...TotalUsage.args} />
            <Tariff {...Tariff.args} />
        </a>
    ),
    menu: <GuestMenu {...GuestMenu.args} />
};