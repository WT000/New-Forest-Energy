import {ComponentMeta, ComponentStory} from "@storybook/react";
import DelegatesListItem from "./DelegatesListItem";



export default {
    title: "DelegatesListItem",
    component: DelegatesListItem,
} as ComponentMeta<typeof DelegatesListItem>;
  
const Template: ComponentStory<typeof DelegatesListItem> = (args) => <DelegatesListItem {...args} />;

export const Delegate1 = Template.bind({});
Delegate1.args = {
    image: "/stories/nfe.png",
    username: "New Forest Escapes",
    onClick: () => console.log("clicked"),
};

export const Delegate2 = Template.bind({});
Delegate2.args = {
    image: "/stories/rachel.jpeg",
    username: "Rachel",
    onClick: () => console.log("clicked"),
};
