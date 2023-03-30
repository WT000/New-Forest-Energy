interface SubtitleProps {
	text1: string;
	text2: string;
	showbar: boolean;
}

export default function Subtitle(props: SubtitleProps) {
	const { text1, text2, showbar } = props;

	if (showbar) {
		return (
			<div>
				<div className="flex flex-row pb-3">
					<h3>
						{text1}
						<small className="text-muted ml-16 display-6 text-black-500">
							{text2}
						</small>
					</h3>
				</div>
				<hr className="border-top-3 w-80" />
			</div>
		);
	} else {
		return (
			<div className="flex flex-row pb-3">
				<h3>
					{text1}
					<small className="text-muted ml-16 display-6 text-black-500">
						{text2}
					</small>
				</h3>
			</div>
		);
	}
}
