export enum TileType {
    input,
    box,
    home,
    link,
    fill
}

interface TileProps {
    tileType: TileType;
    children: React.ReactNode;
    clickable: boolean;
    customClass?: string;
    onClick?: () => void;
}

export default function Tile(props: TileProps) {
    const { tileType, children, clickable, customClass, onClick } = props

    let styling = ""
    if(tileType == TileType.fill) {styling = "h-full md:w-[368px] rounded-[10px]"}
    if(tileType == TileType.input) {styling = "h-[68px] md:w-[368px] rounded-[10px]"}
    if(tileType == TileType.box) {styling = "h-min rounded-[5px] md:w-[448px]"}
    if(tileType == TileType.link) {styling = "h-[46px] w-[150px] md:h-[77px] md:w-[176px] rounded-[5px] md:rounded-[10px]"}
    if(tileType == TileType.home) {styling = "h-[290px] rounded-[5px] md:w-52 md:h-48 hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:border-none"}

    let cursorStyle = ""
    if(clickable) {cursorStyle = "cursor-pointer"}

    return (
        <div className={`${styling} ${customClass} ${cursorStyle} group/tile bg-transparent flex border-solid border-[1px] border-[#DCDCDD]`}
            onClick={onClick}
        >
            {children}
        </div>
    )
    
}