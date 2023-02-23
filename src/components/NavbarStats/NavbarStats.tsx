interface NavbarStatsProps {
    stat: string;
    text: string;
}

export default function NavbarStats(props: NavbarStatsProps) {
    const {stat, text} = props
    
    let line1 = text
    let line2 = ""

    if(text.includes("(")){
        const split = text.split("(")
        line1 = split[0]
        line2 = "(" + split[1]
    }

    return (
        <div className="mx-auto text-center">
            <p className="font-bold text-3xl">{stat}</p>
            <p className="text-sm text-[#77767A]">{line1}<br/>{line2}</p>
        </div>
    )

}