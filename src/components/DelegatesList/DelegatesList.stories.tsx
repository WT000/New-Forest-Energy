import {ComponentMeta, ComponentStory} from "@storybook/react";
import DelegatesList from "./DelegatesList";
import { Delegate1, Delegate2 } from "../DelegatesListItem/DelegatesListItem.stories";



export default {
    title: "DelegatesList",
    component: DelegatesList,
} as ComponentMeta<typeof DelegatesList>;
  
const Template: ComponentStory<typeof DelegatesList> = (args) => <DelegatesList {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    onClick: () => console.log("clicked"),
    children: (
        <>
            <Delegate1 {...Delegate1.args} />
            <Delegate2 {...Delegate2.args} />
        </>
    )
};
