interface BookingLayoutProps {
	cost: string;
	duration: number;
	dateRange: string;
}

export default function BookingLayout(props: BookingLayoutProps) {
	const { cost, duration, dateRange } = props;

	let nightsText = "Nights";
	if (duration == 1) {
		nightsText = "Night";
	}

	return (
		<div className="grid grid-rows-3 text-white-100 w-full">
			<div className="text-lg md:text-[22px]">{cost}</div>
			<div></div>
			<div>
				<p className="text-[10px] md:text-xs">
					{duration} {nightsText}
				</p>
				<p className="text-xs md:text-base">{dateRange}</p>
			</div>
		</div>
	);
}
