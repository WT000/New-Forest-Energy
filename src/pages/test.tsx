import NavbarMenu from "../components/navbar/NavbarMenu/NavbarMenu";
import NavbarMenuItem from "../components/navbar/NavbarMenuItem/NavbarMenuItem";
import NavbarStats from "../components/Stats/Stats";
import DesktopNavbar from "../components/navbar/DesktopNavbar/DesktopNavbar";
import MobileNavbar from "../components/navbar/MobileNavbar/MobileNavbar";
import MobileHeader from "../components/navbar/MobileHeader/MobileHeader";
import {IoHome, IoPieChart, IoFlash, IoCalendar, IoList, IoLogOut, IoAdd} from "react-icons/io5";
import Body from "../components/Body/Body";




export default function test() {
    const navItems = [
        <NavbarMenuItem
                        icon={<IoHome />}
                        text="All Homes"
                        onClick={() => console.log("AllHomes")}
                        activePage={false} 
                    />,
        <NavbarMenuItem
                    icon={<IoPieChart />}
                    text="Dashboard"
                    onClick={() => console.log("Dashboard")}
                    activePage={true} 
        />]

    const statItems = [
        <NavbarStats stat="30" text="some stats (testing)" />,
        <NavbarStats stat="£4.50" text="cost"/>,
        <NavbarStats stat="60" text="some more stats (that are cool)"/>
    ]
    return (
        <Body menuItems={navItems} statItems={statItems}>
            <p>The Body</p>

            



        </Body>



        /*<div>
            <DesktopNavbar 
            text="Welcome back, Rachel"
            image="/stories/rachel.jpeg"
            menu={
                <NavbarMenu>
                    {navItems}
                </NavbarMenu>  
                }
            >
                <NavbarStats stat="30" text="some stats (testing)" />
                <NavbarStats stat="£4.50" text="cost"/>
                <NavbarStats stat="60" text="some more stats (that are cool)"/>
            </DesktopNavbar>
            
            <MobileHeader 
                text="Welcome back, Rachel"
                image="/stories/rachel.jpeg"
                currentPage="Homes"
            />
        
            <MobileNavbar 
                menu={
                    <NavbarMenu>
                        {navItems}
                    </NavbarMenu>
                } 
            />
        
        
    </div>*/
    )
}