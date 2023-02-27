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
    if(cardType == CardType.stats) { styling = "h-20 w-24 shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-[5px]"}
    if(cardType == CardType.icon) { styling = "h-8 w-8 md:w-10 md:h-10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] rounded-lg" }
    if(cardType == CardType.booking) { styling = "h-[170px] w-[170px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] rounded-[10px]"}
    if(cardType == CardType.colourThumbnail) {styling = "h-4 w-4 shadow-[0_2px_1px_rgba(0,0,0,0.1)] rounded-[5px]"}

    let bgColour = "bg-white"
    if(bookingType == BookingType.planned) {bgColour="bg-green-500"}
    if(bookingType == BookingType.inProgress) {bgColour="bg-green-400"}
    if(bookingType == BookingType.complete) {bgColour="bg-orange"}

    return (
        <div className={`${styling} ${bgColour} flex justify-center content-center `}>
            <div className="m-auto">{children}</div>
        </div>
    )
    
}