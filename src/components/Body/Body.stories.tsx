import { ComponentMeta, ComponentStory } from "@storybook/react";
import Body from "./Body";

import NavbarMenuItem from "../navbar/NavbarMenuItem/NavbarMenuItem";
import NavbarStats from "../Stats/Stats";
import {IoHome, IoPieChart} from "react-icons/io5";


const navItems = [
    <NavbarMenuItem
                    icon={<IoHome />}
                    text="All Homes"
                    onClick={() => console.log("AllHomes")}
                    activePage={false} 
                />,
    <NavbarMenuItem
                icon={<IoPieChart />}
                text="Dashboard"
                onClick={() => console.log("Dashboard")}
                activePage={true} 
    />]

const statItems = [
    <NavbarStats stat="30" text="some stats (testing)" />,
    <NavbarStats stat="£4.50" text="cost"/>,
    <NavbarStats stat="60" text="some more stats (that are cool)"/>
]

export default {
	title: "Body",
	component: Body,
} as ComponentMeta<typeof Body>;

const Template: ComponentStory<typeof Body> = (args) => <Body {...args} />;

export const BodyStory = Template.bind({});

BodyStory.args = {
    menuItems: navItems,
	statItems: statItems,
    children: <p>The Body</p>
};
