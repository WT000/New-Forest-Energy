interface ButtonProp {
	icon?: React.ReactElement;
	text?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: ButtonProp) {
	const { icon, text, onClick } = props;

	let backgroundColour =
		"bg-gradient-to-r bg-green-400 hover:to-green-400 hover:from-green-500";
	let iconPadding = "p-2 pl-3";
	let shadowType = "shadow-neutral-350";
	let iconClassName = "";
	let textClassName = "";
	const inputClassName = "";

	if (icon) {
		iconClassName = `${iconPadding}`;
	}

	if (text) {
		if (icon) {
			textClassName = "text-white pl-2 pr-3 md:text-base";
		} else {
			textClassName = "text-white pr-3 pl-3";
		}
	}

	return (
		<button
			onClick={onClick}
			className={`${backgroundColour} rounded-lg ${shadowType} shadow-md flex justify-center items-center`}
		>
			<div className={`${iconClassName}`}>{icon}</div>
			<div className={`${textClassName}`}>{text}</div>
		</button>
	);
}
