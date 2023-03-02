import {ComponentMeta, ComponentStory} from "@storybook/react";
import ImageLayout from "./ImageLayout";

export default {
    title: "ImageLayout",
    component: ImageLayout,
} as ComponentMeta<typeof ImageLayout>;
  
const Template: ComponentStory<typeof ImageLayout> = (args) => <ImageLayout {...args} />;
  
export const RowesCottageImage = Template.bind({});
RowesCottageImage.args = {
    image: "/stories/home1.jpg",
    alt: "Rowes Cottage",
};