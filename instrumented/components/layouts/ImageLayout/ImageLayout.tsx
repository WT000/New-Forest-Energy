import Image from "next/image";

interface ImageLayoutProps {
    image: string;
    alt: string;
}

export default function ImageLayout(props: ImageLayoutProps) {
    const { image, alt } = props;
    return (
        <div className="flex items-center justify-center w-full h-[268px] md:max-h-[320px]">
            <div className="relative w-[94%] h-[90%]">
                <Image
                    className="rounded-[5px] object-fill"
                    src={image}
                    alt={alt}
                    fill
                    unoptimized={true}
                />
            </div>
        </div>
    )
}