import { ReactNode } from "react";
import DesktopNavbar from "../navbar/DesktopNavbar/DesktopNavbar";
import MobileHeader from "../navbar/MobileHeader/MobileHeader";
import MobileNavbar from "../navbar/MobileNavbar/MobileNavbar";
import NavbarMenu from "../navbar/NavbarMenu/NavbarMenu";
import NavbarMenuItem from "../navbar/NavbarMenuItem/NavbarMenuItem";
import Image from 'next/image';
import NavbarStats from '../Stats/Stats'

export interface BodyNavItem{
    icon: React.ReactElement,
    text: string,
    path: string,
    activePage?: boolean
}

interface BodyNavStat{
    stat: string,
    text: string
}

interface BodyProps{
    menuItems?: BodyNavItem[]
    statItems?: BodyNavStat[]
    children: ReactNode
    welcomeText: string
    welcomeImage: string
    currentPage: string
}

export default function Body(props: BodyProps){

    const menuItems = props.menuItems.map(x => {
        return (<NavbarMenuItem key={x.path} icon={x.icon} text={x.text} activePage={x.activePage == true} path={x.path}/>)
    })

    const navBarStats = props.statItems.map(x => {
        return (<NavbarStats stat={x.stat} text={x.text} key={x.text}/>)
    })

    return(
        <div>
            <DesktopNavbar 
            text={props.welcomeText}
            image={props.welcomeImage}
            menu={
                <NavbarMenu>
                    {menuItems}
                </NavbarMenu>  
                }
            >
                {navBarStats}
            </DesktopNavbar>
        
            <MobileHeader 
                text={props.welcomeText}
                image={props.welcomeImage}
                currentPage={props.currentPage}
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
                <div className="p-5 md:px-10 lg:px-12 xl:px-20 md:mt-2">
                    <h1 className="hidden md:block text-3xl">{props.currentPage}</h1>
                    {props.children}
                </div>
            </main>
        
            <MobileNavbar 
                menu={
                    <NavbarMenu>
                        {menuItems}
                    </NavbarMenu>
                } 
            />
        </div>
    )
}