export enum TileType {
    input,
    box,
    home,
    link
}

interface TileProps {
    tileType: TileType;
    children: React.ReactNode;
    clickable: boolean;
    onClick?: () => void;
}

export default function Tile(props: TileProps) {
    const { tileType, children, clickable, onClick } = props

    let styling = ""
    if(tileType == TileType.input) {styling = "w-[80%] h-[66px] md:w-[368px] rounded-[10px]"}
    if(tileType == TileType.box) {styling = "h-8 w-8 md:w-10 md:h-10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] rounded-lg"}
    if(tileType == TileType.link) {styling = "h-[46px] w-[150px] md:h-[77px] md:w-[176px] rounded-[5px] md:rounded-[10px]"}
    if(tileType == TileType.home) {styling = "h-[170px] w-[170px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] rounded-[10px] w-full"}

    let cursorStyle = ""
    if(clickable) {cursorStyle = "cursor-pointer"}

    return (
        <div className={`${styling} ${cursorStyle} bg-white-100 flex border-solid border-[1px] border-[#DCDCDD]`}
            onClick={onClick}
        >
            <div className="m-auto w-full">{children}</div>
        </div>
    )
    
}