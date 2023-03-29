interface ButtonProp {
	icon?: React.ReactElement;
	text?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: ButtonProp) {
	const { icon, text, onClick } = props;

	let backgroundColour =
		"bg-gradient-to-br bg-green-400 hover:to-green-400 hover:from-green-500 hover:scale-105 transition ease-in-out";
	let shadowType = "shadow-neutral-350";
	let textClassName = text && icon ? "text-white md:text-base" : "text-white";

	return (
		<button
			onClick={onClick}
			className={`${backgroundColour} rounded-lg ${shadowType} w-100 md:w-[150px] shadow-md flex gap-4 justify-center items-center py-2 px-4`}
		>
			<div>{icon}</div>
			<div className={`${textClassName}`}>{text}</div>
		</button>
	);
}
