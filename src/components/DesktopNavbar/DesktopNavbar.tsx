import Image from "next/image"
import NavbarMenu from "../NavbarMenu/NavbarMenu";


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
        <div className="w-[260px] min-h-full m-4 rounded-[20px] shadow-[0_4px_100px_rgba(0,0,0,0.1)] grid grid-cols-1 py-9">
            <div>
            <Image
                className="m-auto pb-12"
                src="/tmp-title.PNG"
                alt="Profile Image"
                width={120}
                height={31}
                unoptimized={true}
            />
            <div className="m-auto pb-4">
                <div className="flex items-center justify-center pb-2">
                    <Image
                        className="rounded-full h-24 w-24"
                        src={image}
                        alt="Profile Image"
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
            <div>
                {children}
            </div>
                
            
            <div className="m-auto ">
                <div className="h-[0px] w-[173px] mx-auto border-b-2 border-[#1D1A221A]"></div>
                {menu}
            </div>
            
        </ div>
    )

}