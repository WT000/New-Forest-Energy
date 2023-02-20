import {ComponentMeta, ComponentStory} from "@storybook/react";
import NavbarMenuItem from "./NavbarMenuItem";
import {FaHome} from "react-icons/fa";

export default {
    title: "NavbarMenuItem",
    component: NavbarMenuItem,
  } as ComponentMeta<typeof NavbarMenuItem>;
  
  const Template: ComponentStory<typeof NavbarMenuItem> = (args) => <NavbarMenuItem {...args} />;
  
  export const MenuItem = Template.bind({});
  
  MenuItem.args = {
    icon: FaHome,
    text: "All Homes"
  };