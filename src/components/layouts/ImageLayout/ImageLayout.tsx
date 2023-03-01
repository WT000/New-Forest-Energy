import Image from "next/image";

interface ImageLayoutProps {
    image: string;
    alt: string;
}

export default function ImageLayout(props: ImageLayoutProps) {
    const { image, alt } = props;
    return (
        <div className="flex items-center justify-center h-full w-full">
            <div className="relative w-[94%] h-[90%]">
                <Image
                    className="rounded-[5px]"
                    src={image}
                    alt={alt}
                    fill
                    unoptimized={true}
                />
            </div>
        </div>
    )
}