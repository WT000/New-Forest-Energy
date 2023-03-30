import Image from "next/image";
import { IoTrash, IoTrashBin } from "react-icons/io5";

interface HomeLayoutProps {
    image: string;
    name: string;
    sleeps: number;
    onClick?: (e) => void;
}

export default function HomeLayout(props: HomeLayoutProps) {
    const { image, name, sleeps } = props;
    return (
        <div className="m-auto w-full">
            <div className="flex items-center justify-center">
                <div className="relative w-[90%] h-48 md:h-32 mb-2 md:mb-1">
                    {props.onClick && 
                    <div onClick={(e) => props.onClick(e)} className="transition ease-in-out duration-100 hidden w-8 h-8 absolute left-1 top-1 bg-[rgb(245,136,0,0.7)] z-10 rounded-full group-hover/tile:flex items-center hover:scale-110">
                        <IoTrash className="block h-4 w-4 text-white mx-auto"/>
                    </div>}

                    <Image
                        className="rounded-[5px]"
                        src={image}
                        alt={name}
                        fill
                        unoptimized={true}
                    />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-[90%]">
                    <p className="text-lg md:text-base">{name}</p>
                    <p className="text-sm md:text-xs text-black-500">Sleeps: {sleeps}</p>
                </div>
            </div>

        </div>
    )
}