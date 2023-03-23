import { useSession } from "next-auth/react";
import Head from "next/head";
import { IoHome, IoPieChart } from "react-icons/io5";
import Body from "../../../components/Body/Body";
import NavbarMenuItem from "../../../components/navbar/NavbarMenuItem/NavbarMenuItem";
import NavbarStats from "../../../components/Stats/Stats";

const navItems = [
    <NavbarMenuItem key={"allhomes-link"} icon={<IoHome />} text="All Homes" onClick={() => console.log("AllHomes")} activePage={false} />,
    <NavbarMenuItem key={"dashboard-link"}  icon={<IoPieChart />} text="Dashboard" onClick={() => console.log("Dashboard")} activePage={true} />,
];

const statItems = [
    <NavbarStats key={"somestats-stats"} stat="30" text="some stats (testing)" />,
    <NavbarStats key={"cost-stats"} stat="£4.50" text="cost" />,
    <NavbarStats key={"cool-stats"}  stat="60" text="some more stats (that are cool)" />,
];

export default function NewHome() {
    const { data: session } = useSession();

    return (
        <>
            <Head>
                <title>Edit Home</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Body menuItems={navItems} statItems={statItems}>
                <p>Edit</p>
            </Body>
        </>
    );
}
