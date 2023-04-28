interface StatsProps {
    stat: string;
    text: string;
}

export default function Stats(props: StatsProps) {
    const {stat, text} = props;
    
    let statLargeText = stat;
    let statSmallText = "";
    let line1 = text;
    let line2 = "";

    if(stat && stat.includes(" ")) {
        const split = stat.split(" ");
        statLargeText = split[0];
        statSmallText = split[1];
    }

    if(text && text.includes("(")){
        const split = text.split("(");
        line1 = split[0];
        line2 = "(" + split[1];
    }

    return (
        <div className="mx-auto text-center my-1">
            <p className="text-xl font-bold md:text-3xl text-black leading-6" data-test="navstats">{statLargeText}
                <span className="text-[10px] md:text-lg"> {statSmallText} </span>
            </p>
            <p className="text-black-500 leading-3 text-[10px] md:text-sm">{line1}<br/>
                <span className="text-[8px] leading-3 md:text-xs">{line2}</span>
            </p>
        </div>
    )

}