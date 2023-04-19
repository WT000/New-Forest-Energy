import { ReactNode } from "react";
import DesktopNavbar from "../navbar/DesktopNavbar/DesktopNavbar";
import MobileHeader from "../navbar/MobileHeader/MobileHeader";
import MobileNavbar from "../navbar/MobileNavbar/MobileNavbar";
import NavbarMenu from "../navbar/NavbarMenu/NavbarMenu";
import NavbarMenuItem from "../navbar/NavbarMenuItem/NavbarMenuItem";
import Image from 'next/image';
import NavbarStats from '../Stats/Stats'
import Card, { CardType } from "../Card/Card";
import Stats from "../Stats/Stats";
import Button from "../Button/Button";

export interface BodyNavItem{
    icon: React.ReactElement,
    text: string,
    path?: string,
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

    const mobileNavBarStats = props.statItems.map(x => {
        return (
        <Card key={x.text} cardType={CardType.stats}>
            <Stats stat={x?.stat} text={x?.text}/>
        </Card>)
    })

    let title = props.currentPage;
    let dates = "";
    if(props.currentPage.includes("(")) {
        const split = props.currentPage.split("(");
        title = split[0]
        dates = `(${split[1]}`
    }

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

            <main className="mt-[70px] md:mt-0 mb-[70px] md:mb-0 md:ml-[calc(260px+1rem)]">
                <div className="p-5 md:px-10 lg:px-12 xl:px-20 md:mt-2">
                    <h1 className="hidden md:block text-3xl">{title} <span className="text-xl">{dates}</span></h1>

                    <div className="w-full flex justify-evenly md:hidden">
                        {mobileNavBarStats}
                    </div>

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


export function BodyWithoutNavbar(props : {currentPage: string, children: ReactNode, welcomeText: string}){
    return(
        <div> 

            <MobileHeader 
                currentPage={props.currentPage}
                text={props.welcomeText}
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

            <main className="mt-[70px] md:mt-0 flex items-center flex-col">
                <div className="pt-6 space-y-6">
                    <h1 className="hidden md:block text-3xl">{props.currentPage}</h1>

                    {props.children}
                </div>

            </main>

        </div>
    )
}