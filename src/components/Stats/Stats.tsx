interface StatsProps {
    stat: string;
    text: string;
}

export default function Stats(props: StatsProps) {
    const {stat, text} = props
    
    let line1 = text
    let line2 = ""

    if(text.includes("(")){
        const split = text.split("(")
        line1 = split[0]
        line2 = "(" + split[1]
    }

    return (
        <div className="mx-auto text-center md:mt-10 md:mb-12">
            <p className="text-xl font-bold md:text-3xl text-[#051821]">{stat}</p>
            <p className="text-[10px] md:text-sm text-[#77767A]">{line1}<br/>
                <span className="text-[8px] md:text-sm">{line2}</span>
            </p>
        </div>
    )

}