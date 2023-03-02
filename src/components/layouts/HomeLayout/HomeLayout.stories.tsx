import {ComponentMeta, ComponentStory} from "@storybook/react";
import HomeLayout from "./HomeLayout";

export default {
    title: "HomeLayout",
    component: HomeLayout,
} as ComponentMeta<typeof HomeLayout>;
  
const Template: ComponentStory<typeof HomeLayout> = (args) => <HomeLayout {...args} />;
  
export const RowesCottage = Template.bind({});
RowesCottage.args = {
    image: "/stories/home1.jpg",
    name: "Rowes Cottage",
    sleeps: 4
};