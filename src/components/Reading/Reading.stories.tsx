import { ComponentMeta, ComponentStory } from "@storybook/react";
import Reading from "./Reading";

export default {
    title: "Reading",
    component: Reading,
} as ComponentMeta<typeof Reading>;

const Template: ComponentStory<typeof Reading> = (args) => <Reading {...args} />;

export const SimpleReading = Template.bind({});
SimpleReading.args = {
    creator: "Guest",
    value: 5,
    image: "",
    createdAt: new Date(),
    onClick: () => {
        console.log("click");
    },
};

export const MobileReading = Template.bind({});
MobileReading.args = {
    creator: "Guest",
    value: 5,
    image: "",
    createdAt: new Date(),
    onClick: () => {
        console.log("click");
    },
};
MobileReading.parameters = {
    viewport: {
        defaultViewport: "iphone5",
    },
};
