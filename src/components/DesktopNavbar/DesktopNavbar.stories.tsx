import {ComponentMeta, ComponentStory} from "@storybook/react";
import DesktopNavbar from "./DesktopNavbar";
import { Menu } from "../NavbarMenu/NavbarMenu.stories";
import { Buffer, Tariff } from "../NavbarStats/NavbarStats.stories";

export default {
    title: "DesktopNavbar",
    component: DesktopNavbar,
} as ComponentMeta<typeof DesktopNavbar>;
  
const Template: ComponentStory<typeof DesktopNavbar> = (args) => <DesktopNavbar {...args} />;
  
export const Navbar = Template.bind({});

Navbar.args = {
    welcomeMessage: "Welcome to",
    welcomeName: "Beau Soleil",
    image: "/home.jpg",
    stats: (
        <a>
            <Buffer {...Buffer.args} />
            <Tariff {...Tariff.args} />
        </a>
    ),
    menu: <Menu {...Menu.args} />
};