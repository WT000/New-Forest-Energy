interface BookingLayoutProps {
    cost: number;
    duration: number;
    dateRange: string;
}

export default function BookingLayout(props: BookingLayoutProps) {
    const { cost, duration, dateRange } = props;

    return(
        <div className="grid grid-rows-3 text-white-100 w-full">
            <div className="text-lg md:text-[22px]">£{cost}</div>
            <div></div>
            <div>
                <p className="text-[10px] md:text-xs">{duration} Nights</p>
                <p className="text-xs md:text-base">{dateRange}</p>
            </div>

        </div>
    )
}