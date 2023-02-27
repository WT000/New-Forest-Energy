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

    if(stat.includes(" ")) {
        const split = stat.split(" ");
        statLargeText = split[0];
        statSmallText = split[1];
    }

    if(text.includes("(")){
        const split = text.split("(");
        line1 = split[0];
        line2 = "(" + split[1];
    }

    return (
        <div className="mx-auto text-center md:mt-10 md:mb-12">
            <p className="text-xl font-bold md:text-3xl text-[#051821]">{statLargeText}
                <span className="text-[10px] md:text-xl"> {statSmallText} </span>
            </p>
            <p className="text-[#77767A] text-[10px] md:text-sm">{line1}<br/>
                <span className="text-[8px] md:text-sm">{line2}</span>
            </p>
        </div>
    )

}