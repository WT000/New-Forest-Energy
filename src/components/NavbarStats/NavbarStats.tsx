interface NavbarStatsProps {
    stats: string;
    text: string;
}

export default function NavbarStats(props: NavbarStatsProps) {
    const {stats, text} = props

    return (
        <div className="mx-auto text-center">
            <p className="font-bold text-3xl">{stats}</p>
            <p className="text-sm text-[#77767A]">{text}</p>
        </div>
    )

}