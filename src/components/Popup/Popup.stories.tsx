import { ComponentMeta, ComponentStory } from "@storybook/react";
import Popup from "./Popup";

export default {
  title: "Popup",
  component: Popup,
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = (args) => (
  <Popup {...args} />
);

export const Popup1 = Template.bind({});

Popup1.args = {
    image: "/stories/popup1.jpg",
    name: "Reading 1",
};
