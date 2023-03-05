import { ComponentMeta, ComponentStory } from "@storybook/react";
import Subtitles from "./Subtitles";

export default {
  title: "Subtitles",
  component: Subtitles,
} as ComponentMeta<typeof Subtitles>;

const Template: ComponentStory<typeof Subtitles> = (args) => (
  <Subtitles {...args} />
);

export const Bar1 = Template.bind({});

Bar1.args = {
    text1: "Average Usage Per Day",
    text2: "Secondary Text"
};

