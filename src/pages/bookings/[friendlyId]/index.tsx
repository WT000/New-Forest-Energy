import NavbarMenuItem from "../../../components/navbar/NavbarMenuItem/NavbarMenuItem";
import Stats from "../../../components/Stats/Stats";
import {IoHome, IoPieChart, IoFlash, IoList, IoLogOut} from "react-icons/io5";
import Body from "../../../components/Body/Body";
import Head from "next/head";
import { useRouter } from "next/router";
import Booking from "../../../db/models/Booking";
import Card from "../../../components/Card/Card";
import { CardType } from "../../../components/Card/Card";
import CompactLayout from "../../../components/layouts/CompactLayout/CompactLayout";

// TO DO - UPDATE LINKS

export default function Index({booking, sessionUser}) {
    const router = useRouter();

    const navItems = [
        <NavbarMenuItem
                        icon={<IoHome />}
                        text="All Homes"
                        onClick={() => router.push(`/`)}
                        activePage={false} 
                    />,
        <NavbarMenuItem
                    icon={<IoPieChart />}
                    text="Dashboard"
                    onClick={() => router.push(`/`)}
                    activePage={true} 
        />,
        <NavbarMenuItem
                    icon={<IoFlash />}
                    text="New Reading"
                    onClick={() => router.push(`/`)}
                    activePage={false} 
        />,
        <NavbarMenuItem
                    icon={<IoList />}
                    text="Instructions"
                    onClick={() => router.push(`/`)}
                    activePage={false} 
        />,
        <NavbarMenuItem
                    icon={<IoLogOut />}
                    text="Sign Out"
                    onClick={() => router.push(`/`)}
                    activePage={false} 
        />]

    const statItems = [
        <Stats stat="£1.77" text="Total Costs (minus Buffer)" />,
        <Stats stat="27.2 kWh" text="Total Usage"/>,
    ]


    return (
        <>
            <Head>
                <title>Energise</title>
                <meta name="description" content="Booking Dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Body menuItems={navItems} statItems={statItems}>
                <div className="md:hidden">
                    <Card cardType={CardType.stats}>


                    </Card>
                </div>
                
                <p>The Body</p>
            </Body>
        </>
        



       
    )
}