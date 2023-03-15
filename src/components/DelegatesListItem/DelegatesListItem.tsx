import Image from "next/image";
import { IoRemove } from "react-icons/io5";

interface DelegatesListItemProps {
    image: string;
    username: string;
    onClick: () => void;
}

export default function DelegatesListItem(props: DelegatesListItemProps) {
    const {image, username, onClick} = props;

    return (
        <div 
            className="relative h-11 w-11 md:h-12 md:w-12 rounded-full cursor-pointer flex justify-center items-center
                bg-[#1D1A22] text-[rgb(255,255,255,0.0)] hover:bg-orange hover:text-[rgb(255,255,255,1)] 
                transition ease-in-out hover:scale-110"
            onClick={onClick}
        >
            <IoRemove className="" size="20px" />
            <Image
                className="rounded-full opacity-75 hover:opacity-25"
                src={image}
                alt={username}
                fill
                unoptimized={true}
            />
        </div>
    )
}