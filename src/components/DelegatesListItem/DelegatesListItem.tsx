import Image from "next/image";

interface DelegatesListItemProps {
    image: string;
    username: string;
    onClick: () => void;
}

export default function DelegatesListItem(props: DelegatesListItemProps) {
    const {image, username, onClick} = props;

    return (
        <div 
            className="relative h-11 w-11 md:h-12 md:w-12 rounded-full bg-[#1D1A2240] cursor-pointer"
            onClick={onClick}
        >
            <Image
                className="rounded-full opacity-75"
                src={image}
                alt={username}
                fill
                unoptimized={true}
            />
        </div>
    )
}