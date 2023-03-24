import { ComponentMeta, ComponentStory } from "@storybook/react";
import QRCode from "./QRCode";
import { IoSave } from "react-icons/io5";

export default {
	title: "QRCode",
	component: QRCode,
} as ComponentMeta<typeof QRCode>;

const Template: ComponentStory<typeof QRCode> = (args) => <QRCode {...args} />;

export const QRCodeSubmit = Template.bind({});

QRCodeSubmit.args = {
	text: "https://www.npmjs.com/package/next-qrcode",
};
