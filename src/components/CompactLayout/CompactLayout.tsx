interface CompactLayoutProps{
    icon: React.ReactElement;
    textLine1: string;
    textLine2: string;
}

export default function CompactLayout(props: CompactLayoutProps) {
    const { icon, textLine1, textLine2 } = props;

    return(
        <div className="grid grid-cols-3">
            
            <div className="col-span-1 m-auto">
                {icon}
            </div>
            <div className="col-span-2 pl-1">
                <p className="text-black-500 text-[10px] md:text-sm">{textLine1}</p>
                <p className="text-sm md:text-lg font-semibold">{textLine2}</p>
                
            </div>
        </div>
    )

}