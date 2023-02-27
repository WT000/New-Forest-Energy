interface BookingLayoutProps {
    cost: number;
    duration: number;
    dateRange: string;
}

export default function BookingLayout(props: BookingLayoutProps) {
    const { cost, duration, dateRange } = props;

    return(
        <div className="grid grid-rows-3 p-2 text-white-100">
            <div className="text-[22px]">£{cost}</div>
            <div></div>
            <div>
                <p className="text-xs">{duration} Nights</p>
                <p>{dateRange}</p>
            </div>

        </div>
    )
}