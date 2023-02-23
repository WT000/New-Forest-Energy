import Image from "next/image"

interface DesktopNavbarProps {
    text: string;
    image: string;
    menu: React.ReactNode;
    children: React.ReactNode;
}

export default function DesktopNavbar(props: DesktopNavbarProps) {
    const {text, image, menu, children} = props;

    let welcome = text
    let name = ""

    if(text.includes(",")){
        const split = text.split(",");
        welcome = split[0];
        name = split[1]
    }

    return (
        <div className="absolute hidden md:grid w-[260px] min-h-[calc(100%-2rem)] m-4 rounded-[20px] shadow-[0_4px_100px_rgba(0,0,0,0.1)] grid-cols-1 py-9">
            <div>
                <Image
                    className="m-auto pb-12"
                    src="/tmp-title.PNG"
                    alt="Logo"
                    width={120}
                    height={31}
                    unoptimized={true}
                />
                <div className="m-auto">
                    <div className="flex items-center justify-center pb-1">
                        <Image
                            className="rounded-full h-24 w-24"
                            src={image}
                            alt="Profile Picture"
                            width={193}
                            height={108}
                            unoptimized={true}
                            
                        />
                    </div>
                </div>
                <div className="text-center">
                    <span className="text-sm text-[#77767A]">{welcome},</span><br/>
                    <span className="font-bold text-lg">{name}</span>
                </div>
            </div>
            <div className="flex flex-col gap-20">
                {children}
            </div>
            <div className="m-auto ">
                <div className="h-[0px] w-[173px] mx-auto border-b-2 border-[#1D1A221A]"></div>
                {menu}
            </div>
        </ div>
    )
}