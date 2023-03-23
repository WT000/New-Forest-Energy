import MyToast from "./MyToast";
import { IoClose } from "react-icons/io5";
import { Toaster } from "react-hot-toast";

export default {
	title: "MyToast",
	component: MyToast,
};

const Template = (args) => (
	<div>
		<button onClick={MyToast({ ...args })}>Make me a custom toast</button>
		<Toaster></Toaster>
	</div>
);

export const DefaultMyToast = Template.bind({});

DefaultMyToast.args = {
	text: "Link has been copied",
	icon: <IoClose />,
	duration: 10000,
};

export const InteractiveMyToast = Template.bind({});

InteractiveMyToast.args = {
	text: "Delegate removed",
	icon: <IoClose />,
	interactive: { href: "#", text: "Undo" },
	duration: 10000,
};
