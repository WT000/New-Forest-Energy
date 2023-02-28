import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tile from "./Tile";
import { TileType } from "./Tile";
import { Share, QRCode } from "../CompactLayout/CompactLayout.stories";

export default {
    title: "Tile",
    component: Tile,
} as ComponentMeta<typeof Tile>;
  
const Template: ComponentStory<typeof Tile> = (args) => <Tile {...args} />;

export const ShareLink = Template.bind({});
ShareLink.args = {
    tileType: TileType.link,
    children: <Share {...Share.args} />,
    link: true,
    onClick: () => console.log("clicked"),
};

export const PrintQR = Template.bind({});
PrintQR.args = {
    tileType: TileType.link,
    children: <QRCode {...QRCode.args} />,
    link: true,
    onClick: () => console.log("clicked"),
};

export const tempInput = Template.bind({});
tempInput.args = {
    tileType: TileType.input,
    children: <div>Temp</div>,
    link: false
};