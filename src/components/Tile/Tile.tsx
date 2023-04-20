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
    focus?: () => void;
}

export default function Tile(props: TileProps) {
    const { focus, tileType, children, clickable, customClass, onClick } = props

    const focusChild = () => {
        if(focus){
           focus()
        }
    }


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
            onClick={(e) => {
                console.log("hit")
                focusChild();
                if(onClick){
                    onClick();
                }
            }}
        >
            {children}
        </div>
    )
    
}