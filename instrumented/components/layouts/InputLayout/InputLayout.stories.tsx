import {ComponentMeta, ComponentStory} from "@storybook/react";
import InputLayout from "./InputLayout";
import { IoText, IoImages } from "react-icons/io5";

export default {
    title: "InputLayout",
    component: InputLayout,
} as ComponentMeta<typeof InputLayout>;
  
const Template: ComponentStory<typeof InputLayout> = (args) => <InputLayout {...args} />;
  
export const HomeName = Template.bind({});
HomeName.args = {
    icon: <IoText size="32px"/>,
    text: "Home Name",
    type: "text",
    name: "name",
    placeholder: "My New Home..."
};

export const HomeImage = Template.bind({});
HomeImage.args = {
    icon: <IoImages size="32px"/>,
    text: "Home Image",
    type: "file",
    name: "image",
    placeholder: "Select Image"
};
