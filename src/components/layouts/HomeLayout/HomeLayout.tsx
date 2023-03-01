import Image from "next/image";

interface HomeLayoutProps {
    image: string;
    name: string;
    sleeps: number;
}

export default function HomeLayout(props: HomeLayoutProps) {
    const { image, name, sleeps } = props;
    return (
        <div className="w-full">
            <div className="flex items-center justify-center">
                <div className="relative w-[90%] h-48 md:h-32">
                    <Image
                        className="rounded-[5px]"
                        src={image}
                        alt={name}
                        fill
                        unoptimized={true}
                    />
                </div>
            </div>
            <div>
                <p className="text-lg md:text-base">{name}</p>
                <p className="text-sm md:text-xs text-black-500">Sleeps: {sleeps}</p>
            </div>

        </div>
    )
}