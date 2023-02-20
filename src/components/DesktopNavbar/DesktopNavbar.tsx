import Image from "next/image"
import NavbarMenu from "../NavbarMenu/NavbarMenu";


interface DesktopNavbarProps {
    welcomeMessage: string;
    welcomeName: string;
    image: string;
    stats: React.ReactNode;
    menu: React.ReactNode;
}

export default function DesktopNavbar(props: DesktopNavbarProps) {
    const {welcomeMessage, welcomeName, image, stats, menu} = props;
    return (
        <div className="w-[260px] h-min-screen m-4 rounded-[20px] shadow-[0_4px_100px_rgba(0,0,0,0.1)] grid grid-cols-1 py-9">
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
                <div className="text-center">
                    <span className="text-sm text-[#77767A]">{welcomeMessage},</span><br/>
                    <span className="font-bold text-lg">{welcomeName}</span>
                </div>
            </div>
            <div>
                {stats}
            </div>
                
            
            <div className="m-auto ">
                <div className="h-[0px] w-[173px] mx-auto border-2 border-[#1D1A221A]"></div>
                {menu}
            </div>
            
        </ div>
    )

}