interface ToastProp {
	icon?: React.ReactElement;
	text?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	interactive?: { href: string; text: string };
}

export default function Toast(props: ToastProp) {
	const { icon, text, onClick, interactive } = props;
	let buttons = null;

	let closeButton = (
		<button
			type="button"
			className={
				"text-white text-2xl ml-auto hover:scale-125 transition ease-in-out"
			}
			data-dismiss-target="#toast-default"
			aria-label="Close"
		>
			{icon}
		</button>
	);

	if (interactive) {
		buttons = (
			<div className="grid grid-cols-2 gap-2 ml-auto">
				<div>
					<a
						href={interactive.href}
						className="inline-flex justify-center w-full text-base font-bold text-center text-white hover:scale-110 transition ease-in-out"
					>
						{interactive.text}
					</a>
				</div>
				<div className="inline-flex justify-center">{closeButton}</div>
			</div>
		);
	} else {
		buttons = closeButton;
	}

	return (
		<div>
			<div
				id="toast-default"
				className="flex items-center py-4 w-full pr-5 max-w-xs bg-[#051821] rounded-lg shadow"
				role="alert"
			>
				<div className="ml-3 text-base font-normal text-white">
					{text}
				</div>
				{buttons}
			</div>
		</div>
	);
}
