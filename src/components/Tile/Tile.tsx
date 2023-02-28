export enum TileType {
    input,
    text,
    home,
    link
}

interface TileProps {
    tileType: TileType;
    children: React.ReactNode;
}

export default function Tile(props: TileProps) {
    const { tileType, children } = props

    let styling = ""
    if(tileType == TileType.input) {styling = "h-20 w-24 shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-[5px]"}
    if(tileType == TileType.text) {styling = "h-8 w-8 md:w-10 md:h-10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] rounded-lg"}
    if(tileType == TileType.link) {styling = "h-[46px] w-[150px] rounded-[5px] md:h-[77px] md:w-[176px] md:rounded-[10px] drop-shadow-[0_4px_100px_rgba(0,0,0,0.1)]"}
    if(tileType == TileType.home) {styling = "h-[170px] w-[170px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] rounded-[10px] w-full"}

    return (
        <div className={`${styling} bg-white-100 flex border-solid border-[#DCDCDD]`}>
            <div className="m-auto">{children}</div>
        </div>
    )
    
}