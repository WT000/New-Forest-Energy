import {ComponentMeta, ComponentStory} from "@storybook/react";
import DelegatesList from "./DelegatesList";
import { Primary as Delegate } from "../DelegatesListItem/DelegatesListItem.stories";



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
            <Delegate {...Delegate.args} />
            <Delegate {...Delegate.args} />
            <Delegate {...Delegate.args} />
        </>
    )
};
