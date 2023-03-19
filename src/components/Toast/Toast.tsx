import toast, { Toaster } from "react-hot-toast";

// TODO: Duration, transition?
interface ToastProp {
	icon?: React.ReactElement;
	text: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	interactive?: { href: string; text: string };
	duration?: 5000;
	transition?: "250ms";
}

export default function Toast(props: ToastProp) {
	const { icon, text, onClick, interactive } = props;

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
							<div>
								<a
									href={interactive.href}
									className="inline-flex justify-center w-full text-base font-bold text-center text-white hover:scale-110 transition ease-in-out"
								>
									{interactive.text}
								</a>
							</div>
							<div className="inline-flex justify-center">
								<IconButton icon={icon} parentToastId={t.id} />
							</div>
						</div>
					)}
				</div>
			),
			{
				duration: 5000,
			}
		);
	};

	// const X = toast.custom(
	// 	(t) => (
	// 		<div
	// 			id="toast-default"
	// 			className="flex items-center py-4 w-full pr-5 max-w-xs bg-[#051821] rounded-lg shadow"
	// 			role="alert"
	// 			style={{
	// 				opacity: t.visible ? 1 : 0,
	// 				transition: "opacity 250ms ease-in-out",
	// 			}}
	// 		>
	// 			<div className="ml-3 text-base font-normal text-white">
	// 				{text}
	// 			</div>
	// 			{!interactive && (
	// 				<IconButton icon={icon} parentToastId={t.id} />
	// 			)}
	// 			{interactive && (
	// 				<div className="grid grid-cols-2 gap-2 ml-auto">
	// 					<div>
	// 						<a
	// 							href={interactive.href}
	// 							className="inline-flex justify-center w-full text-base font-bold text-center text-white hover:scale-110 transition ease-in-out"
	// 						>
	// 							{interactive.text}
	// 						</a>
	// 					</div>
	// 					<div className="inline-flex justify-center">
	// 						<IconButton icon={icon} parentToastId={t.id} />
	// 					</div>
	// 				</div>
	// 			)}
	// 		</div>
	// 	),
	// 	{
	// 		duration: 5000,
	// 	}
	// );

	return (
		<div>
			<button onClick={notify}>Make me a toast</button>
			<Toaster></Toaster>
		</div>
	);
}
