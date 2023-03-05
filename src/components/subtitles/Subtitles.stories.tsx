import { ComponentMeta, ComponentStory } from "@storybook/react";
import Subtitles from "./Subtitles";

export default {
  title: "Subtitles",
  component: Subtitles,
} as ComponentMeta<typeof Subtitles>;

const Template: ComponentStory<typeof Subtitles> = (args) => (
  <Subtitles {...args} />
);

export const SubtitlesWithBar = Template.bind({});

SubtitlesWithBar.args = {
    text1: "Average Usage Per Day",
    text2: "Secondary Text",
    showbar: true
};

export const SubtitlesWithoutBar = Template.bind({});

SubtitlesWithoutBar.args = {
    text1: "Average Usage Per Day",
    text2: "Secondary Text",
    showbar: false
};
