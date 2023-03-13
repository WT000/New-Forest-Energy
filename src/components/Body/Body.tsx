import { ReactNode } from "react";
import DesktopNavbar from "../navbar/DesktopNavbar/DesktopNavbar";
import MobileHeader from "../navbar/MobileHeader/MobileHeader";
import MobileNavbar from "../navbar/MobileNavbar/MobileNavbar";
import NavbarMenu from "../navbar/NavbarMenu/NavbarMenu";
import NavbarMenuItem from "../navbar/NavbarMenuItem/NavbarMenuItem";
import Image from 'next/image';

interface BodyProps{
    menuItems?: ReactNode
    statItems?: ReactNode
    children: ReactNode
}

export default function Body(props: BodyProps){
    return(
        <div>
            <DesktopNavbar 
            text="Welcome back, Rachel"
            image="/stories/rachel.jpeg"
            menu={
                <NavbarMenu>
                    {props.menuItems}
                </NavbarMenu>  
                }
            >
                {props.statItems}
            </DesktopNavbar>
        
            <MobileHeader 
                text="Welcome back, Rachel"
                image="/stories/rachel.jpeg"
                currentPage="Homes"
            />

            <div className="hidden md:block h-32 overflow-clip">
                <div className="h-56 w-full relative -z-10 bottom-8">
                    <Image
                        priority
                        src="/img/leafBackground.svg"
                        fill
                        alt="Leaf Image"
                        />
                </div>                    
            </div>

            <main className="mt-[70px] md:mt-0 md:ml-[calc(260px+1rem)]">
                <div className="p-5">
                    {props.children}
                </div>
            </main>
        
            <MobileNavbar 
                menu={
                    <NavbarMenu>
                        {props.menuItems}
                    </NavbarMenu>
                } 
            />
        </div>
    )
}