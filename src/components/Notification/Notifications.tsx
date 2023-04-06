import toast from "react-hot-toast";

interface NotificationProp {
	icon: React.ReactElement;
	text: string;
	interactive?: { onClick: () => void; text: string };
	duration?: number;
}

/**
 *
 * @param props icon, text, interactive, duration
 * @returns
 */
export default function Notification(props: NotificationProp) {
	const { icon, text, interactive, duration } = props;

	/**
	 * An button for dismissing the toast.
	 * @param props parentToastId: Id of the toast to dismiss;
	 * @param props icon: Icon to dismiss with (e.g. X)
	 * @returns
	 */
	function IconButton(props) {
		return (
			<button
				type="button"
				onClick={() => toast.dismiss(props.parentToastId)}
				className={
					"text-white text-2xl ml-auto hover:scale-125 transition ease-in-out"
				}
				data-dismiss-target="#toast-default"
				aria-label="Close"
			>
				{props.icon}
			</button>
		);
	}

	const notify = () => {

		toast.custom(
			(t) => (
				<div
					id="toast-default"
					className="flex items-center py-4 w-full pr-5 max-w-xs bg-[#051821] rounded-lg shadow"
					role="alert"
					style={{
						opacity: t.visible ? 1 : 0,
						transition: "opacity 250ms ease-in-out",
					}}
				>
					<div className="ml-3 text-base font-normal text-white">
						{text}
					</div>
					{!interactive && (
						<IconButton icon={icon} parentToastId={t.id} />
					)}
					{interactive && (
						<div className="grid grid-cols-2 gap-2 ml-auto">
							<button
									onClick={function(event){ interactive.onClick(); toast.dismiss(t.id);}}
									className="inline-flex justify-center w-full text-base font-bold text-center text-white hover:scale-110 transition ease-in-out"
								>
									{interactive.text}
							</button>
							<div className="inline-flex justify-center">
								<IconButton icon={icon} parentToastId={t.id} />
							</div>
						</div>
					)}
				</div>
			),
			{
				duration: duration ? duration : 5000,
			}
		);
	};

	return notify;
}
