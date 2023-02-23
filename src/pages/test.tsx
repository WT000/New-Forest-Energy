import NavbarMenu from "../components/NavbarMenu/NavbarMenu";
import NavbarMenuItem from "../components/NavbarMenuItem/NavbarMenuItem";
import NavbarStats from "../components/NavbarStats/NavbarStats";
import DesktopNavbar from "../components/DesktopNavbar/DesktopNavbar";
import {IoHome, IoPieChart, IoFlash, IoCalendar, IoList, IoLogOut, IoAdd} from "react-icons/io5";


export default function test() {
    return (
        <DesktopNavbar 
            welcomeMessage="Welcome back"
            welcomeName="Rachel"
            image="/stories/rachel.jpeg"
            menu={
                <NavbarMenu>
                    <NavbarMenuItem
                        icon={<IoHome />}
                        text="All Homes"
                        onClick={() => console.log("AllHomes")}
                        activePage={false} 
                    />
                    <NavbarMenuItem
                        icon={<IoPieChart />}
                        text="Dashboard"
                        onClick={() => console.log("Dashboard")}
                        activePage={true} 
                    />
                </NavbarMenu>  
            }
        >
            <NavbarStats stat="30" text="some stats (testing)" />
            <NavbarStats stat="£4.50" text="cost"/>
            <NavbarStats stat="60" text="some more stats (that are cool)"/>
        </DesktopNavbar>
    )
}