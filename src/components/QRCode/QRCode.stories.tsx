import { ComponentMeta, ComponentStory } from "@storybook/react";
import QRCode from "./QRCode";
import { IoSave } from "react-icons/io5";

export default {
	title: "QRCode",
	component: QRCode,
} as ComponentMeta<typeof QRCode>;

const Template: ComponentStory<typeof QRCode> = (args) => <QRCode {...args} />;

export const QRCodeDefault = Template.bind({});

QRCodeDefault.args = {
	text: "https://www.npmjs.com/package/next-qrcode",
};

export const QRCodeCustom = Template.bind({});

QRCodeCustom.args = {
	text: "https://www.npmjs.com/package/next-qrcode",
	margin: 4,
	width: 750,
	color: { dark: "#000000", light: "#FFFFFF" },
};
