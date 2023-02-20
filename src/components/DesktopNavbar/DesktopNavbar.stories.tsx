import {ComponentMeta, ComponentStory} from "@storybook/react";
import DesktopNavbar from "./DesktopNavbar";
import { Menu } from "../NavbarMenu/NavbarMenu.stories";

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
    menu: <Menu {...Menu.args} />
};