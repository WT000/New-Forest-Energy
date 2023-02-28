import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tile from "./Tile";
import { TileType } from "./Tile";

export default {
    title: "Tile",
    component: Tile,
} as ComponentMeta<typeof Tile>;
  
const Template: ComponentStory<typeof Tile> = (args) => <Tile {...args} />;

export const ShareLink = Template.bind({});
ShareLink.parameters = { viewport: { defaultViewport: "iphone5" } };
ShareLink.args = {
    TileType: TileType.link,
    // children: <MobileCost {...MobileCost.args} />
};