import { ComponentMeta, ComponentStory } from "@storybook/react";
import Toast from "./Toast";
import { IoClose } from "react-icons/io5";

export default {
	title: "Toast",
	component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const DefaultToast = Template.bind({});

DefaultToast.args = {
	text: "Link has been copied",
	icon: <IoClose />,
};

export const InteractiveToast = Template.bind({});

InteractiveToast.args = {
	text: "Delegate removed",
	icon: <IoClose />,
	interactive: { href: "#", text: "Undo" },
};
