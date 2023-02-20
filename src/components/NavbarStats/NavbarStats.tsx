interface NavbarStatsProps {
    stats: string;
    text1: string;
    text2?: string;
}

export default function NavbarStats(props: NavbarStatsProps) {
    const {stats, text1, text2} = props

    return (
        <div className="mx-auto text-center mt-10 mb-12">
            <p className="font-bold text-3xl">{stats}</p>
            <p className="text-sm text-[#77767A]">{text1}<br/>{text2}</p>
        </div>
    )

}