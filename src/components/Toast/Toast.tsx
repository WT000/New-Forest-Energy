interface ToastProp {
	icon?: React.ReactElement;
	text?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Toast(props: ToastProp) {
	const { icon, text, onClick } = props;

	return (
		<div>
			<div
				id="toast-default"
				className="flex items-center py-4 w-full pr-5 max-w-xs text-gray-500 bg-[#051821] rounded-lg shadow"
				role="alert"
			>
				<div className="ml-3 text-base font-normal text-white">
					{text}
				</div>
				<button
					type="button"
					className={`text-white text-2xl ml-auto`}
					data-dismiss-target="#toast-default"
					aria-label="Close"
				>
					{icon}
				</button>
			</div>
		</div>
	);
}
