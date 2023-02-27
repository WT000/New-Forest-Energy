export enum CardType {
    stats,
    icon,
    comparison,
    booking
}

interface CardProps {
    cardType: CardType;
    stats?: React.ReactNode;
    icon?: React.ReactNode;
}


export default function Card(props: CardProps) {
    const { cardType, stats, icon } = props

    let styling = ""

    if(cardType == CardType.stats) { styling = "h-20 w-24 shadow-[0_2px_10px_rgba(0,0,0,0.1)]"}
    if(cardType == CardType.icon) { styling = "w-12 h-12 shadow-[0_4px_10px_rgba(0,0,0,0.1)]" }

    return (
        <div className={`${styling} flex justify-center items-center rounded-lg bg-white`}>
            <div className="m-auto">{stats}</div>
            
        </div>
    )
    
}