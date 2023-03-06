export enum CardType {
    stats,
    icon,
    comparison,
    booking,
    colourThumbnail
}

export enum BookingType {
    planned,
    inProgress,
    complete
}

interface CardProps {
    cardType: CardType;
    bookingType?: BookingType;
    children?: React.ReactNode;
}


export default function Card(props: CardProps) {
    const { cardType, bookingType, children } = props

    let styling = ""
    if(cardType == CardType.stats) {styling = "h-20 w-24 shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-[5px]"}
    if(cardType == CardType.icon) {styling = "h-8 w-8 md:w-10 md:h-10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] rounded-lg"}
    if(cardType == CardType.comparison) {styling = "h-[46px] w-[150px] rounded-[5px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] md:h-[77px] md:w-[176px] md:rounded-[10px] md:shadow-[0_4px_20px_rgba(0,0,0,0.1)]"}
    if(cardType == CardType.booking) {styling = "w-[114px] h-[114px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] rounded-[10px] md:h-[170px] md:w-[170px]"}
    if(cardType == CardType.colourThumbnail) {styling = "w-[11px] h-2.5 rounded-sm shadow-[0_2px_1px_rgba(0,0,0,0.1)] md:h-4 md:w-4 md:rounded-[5px]"}

    let bgColour = "bg-white"
    if(bookingType == BookingType.planned) {bgColour="bg-green-500"}
    if(bookingType == BookingType.inProgress) {bgColour="bg-green-400"}
    if(bookingType == BookingType.complete) {bgColour="bg-orange"}

    return (
        <div className={`${styling} ${bgColour} flex`}>
            <div className="m-auto">{children}</div>
        </div>
    )
    
}