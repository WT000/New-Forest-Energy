import Image from "next/image"
import Link from "next/link";

interface DesktopNavbarProps {
    text: string;
    image: string;
    menu: React.ReactNode;
    children: React.ReactNode;
    homeLink?: string
}

export default function DesktopNavbar(props: DesktopNavbarProps) {
    const {text, image, menu, children} = props;

    let welcome = text
    let name = ""

    if(text && text.includes(",")){
        const split = text.split(",");
        welcome = split[0];
        name = split[1]
    }

    return (
        <div className="fixed left-0 top-0 bg-white-100 hidden md:flex md:flex-col w-[260px] min-h-[calc(100%-2rem)] m-4 rounded-[20px] shadow-[0_4px_100px_rgba(0,0,0,0.1)] p-9 z-10">
            <div>
                <Image
                    className="m-auto pb-12"
                    src="/logo.png"
                    alt="Logo"
                    width={120}
                    height={31}
                    unoptimized={true}
                />
                <div className="m-auto">
                    <div className="flex items-center justify-center pb-1">

                        {props.homeLink ? (
                                <Link href={props.homeLink} className="cursor-pointer">
                                    <Image
                                        className="rounded-full h-24 w-24"
                                        src={image}
                                        alt="Profile Picture"
                                        width={193}
                                        height={108}
                                        unoptimized={true}
                                    />      
                                </Link>
                            ) : (
                                <Image
                                className="rounded-full h-24 w-24"
                                src={image}
                                alt="Profile Picture"
                                width={193}
                                height={108}
                                unoptimized={true}
                            />
                        )}
                        
                    </div>
                </div>
                <div className="text-center">
                    <span className="text-sm text-black-500">{welcome},</span><br/>
                    <span className="font-bold text-lg text-black">{name}</span>
                </div>
            </div>
            <div className="grow self-center flex flex-col place-content-evenly">
                {children}
            </div>
            <div className="justify-self-center align-self-end flex flex-col justify-center">
                <div className="h-[0px] w-[173px] mx-auto border-b-2 border-[#1D1A221A]"></div>
                {menu}
            </div>
        </ div>
    )
}