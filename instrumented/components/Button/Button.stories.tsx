import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";
import { IoSave } from "react-icons/io5";

export default {
	title: "Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonSubmit = Template.bind({});

ButtonSubmit.args = {
	text: "Submit",
	icon: <IoSave className="text-white" />,
};
