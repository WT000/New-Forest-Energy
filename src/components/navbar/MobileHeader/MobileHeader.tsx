import Image from "next/image"

interface MobileHeaderProps {
    text: string;
    image: string;
    currentPage: string;
}

export default function MobileHeader(props: MobileHeaderProps) {
    const {text, image, currentPage} = props;

    let welcome = text
    let name = ""

    if(text.includes(",")){
        const split = text.split(",");
        welcome = split[0];
        name = split[1]
    }

    return (
        <div className="md:hidden absolute w-full top-0 left-0 h-[70px] rounded-b-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] grid grid-cols-4 content-center">
                <div className="flex items-center justify-center col-span-1">
                    <Image
                        className="rounded-full h-12 w-12"
                        src={image}
                        alt="Profile Picture"
                        width={107}
                        height={60}
                        unoptimized={true}
                    />
                </div>
                <div className="col-span-3 flex content-center items-center">
                    <div className="text-sm text-[#051821]">
                        <span className=" text-[#77767A]">{welcome},</span> 
                        <span className="font-bold">{name}</span><br/>
                        <span className="text-xs">{currentPage}</span>
                    </div>
                </div>
        </div>
    )
}