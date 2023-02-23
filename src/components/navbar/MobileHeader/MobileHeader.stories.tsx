import {ComponentMeta, ComponentStory} from "@storybook/react";
import MobileHeader from "./MobileHeader";



export default {
    title: "MobileHeader",
    component: MobileHeader,
    parameters: {
        viewport: {
          defaultViewport: 'iphone5',
        },
      },
} as ComponentMeta<typeof MobileHeader>;
  
const Template: ComponentStory<typeof MobileHeader> = (args) => <MobileHeader {...args} />;

export const HomeOwnerAgency = Template.bind({});

HomeOwnerAgency.args = {
    text: "Welcome to, Beau Soleil",
    image: "/stories/home.jpg",
    currentPage: "Dashboard",
};


export const HomesAgency = Template.bind({});

HomesAgency.args = {
    text: "Welcome back, Rachel",
    image: "/stories/rachel.jpeg",
    currentPage: "Homes",
};

