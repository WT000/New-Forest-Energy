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
        <div className="mx-auto text-center mt-10 mb-12">
            <p className="font-bold text-3xl text-[#051821]">{stat}</p>
            <p className="text-sm text-[#77767A]">{line1}<br/>{line2}</p>
        </div>
    )

}