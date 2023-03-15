import {ComponentMeta, ComponentStory} from "@storybook/react";
import DelegatesListItem from "./DelegatesListItem";



export default {
    title: "DelegatesListItem",
    component: DelegatesListItem,
} as ComponentMeta<typeof DelegatesListItem>;
  
const Template: ComponentStory<typeof DelegatesListItem> = (args) => <DelegatesListItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    image: "/stories/rachel.jpeg",
    username: "Rachel",
    onClick: () => console.log("clicked"),
};
