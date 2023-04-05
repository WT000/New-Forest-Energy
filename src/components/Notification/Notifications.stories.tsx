import Notification from "./Notifications";
import { IoClose } from "react-icons/io5";
import { Toaster } from "react-hot-toast";

export default {
	title: "Notification",
	component: Notification,
};

const Template = (args) => (
	<div>
		<button onClick={Notification({ ...args })}>
			Make me a custom toast
		</button>
		<Toaster></Toaster>
	</div>
);

export const DefaultNotification = Template.bind({});

DefaultNotification.args = {
	text: "Link has been copied",
	icon: <IoClose />,
	duration: 10000,
};

export const InteractiveNotification = Template.bind({});

InteractiveNotification.args = {
	text: "Delegate removed",
	icon: <IoClose />,
	interactive: {
		text: "Undo",
		onClick: () => {
			console.log("Clicked!");
		},
	},
	duration: 2000,
};
