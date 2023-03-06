import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tile from "./Tile";
import { TileType } from "./Tile";
import { Share, QRCode } from "../layouts/CompactLayout/CompactLayout.stories";
import { RowesCottage } from "../layouts/HomeLayout/HomeLayout.stories";
import { RowesCottageImage } from "../layouts/ImageLayout/ImageLayout.stories";
import { InstructionsText } from "../layouts/InstructionsLayout/InstructionsLayout.stories";
import { HomeName, HomeImage } from "../layouts/InputLayout/InputLayout.stories";

export default {
    title: "Tile",
    component: Tile,
} as ComponentMeta<typeof Tile>;
  
const Template: ComponentStory<typeof Tile> = (args) => <Tile {...args} />;

export const ShareLink = Template.bind({});
ShareLink.args = {
    tileType: TileType.link,
    children: <Share {...Share.args} />,
    clickable: true,
    onClick: () => console.log("clicked"),
};

export const PrintQR = Template.bind({});
PrintQR.args = {
    tileType: TileType.link,
    children: <QRCode {...QRCode.args} />,
    clickable: true,
    onClick: () => console.log("clicked"),
};

export const TextInput = Template.bind({});
TextInput.args = {
    tileType: TileType.input,
    children: <HomeName {...HomeName.args} />,
    clickable: false
};

export const FileInput = Template.bind({});
FileInput.args = {
    tileType: TileType.input,
    children: <HomeImage {...HomeImage.args} />,
    clickable: false
};

export const Home = Template.bind({});
Home.args = {
    tileType: TileType.home,
    children: <RowesCottage {...RowesCottage.args} />,
    clickable: true,
    onClick: () => console.log("clicked"),
};

export const Image = Template.bind({});
Image.args = {
    tileType: TileType.box,
    children: <RowesCottageImage {...RowesCottageImage.args} />,
    clickable: false,
};

export const Instructions = Template.bind({});
Instructions.args = {
    tileType: TileType.box,
    children: <InstructionsText {...InstructionsText.args} />,
    clickable: false,
};