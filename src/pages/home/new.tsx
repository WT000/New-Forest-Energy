import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import Head from "next/head";
import { IoHome, IoPieChart } from "react-icons/io5";
import Body from "../../components/Body/Body";
import NavbarMenuItem from "../../components/navbar/NavbarMenuItem/NavbarMenuItem";
import NavbarStats from "../../components/Stats/Stats";
import getRole from "../../lib/utils/getRole";
import Role from "../../lib/utils/roles";

const navItems = [
    <NavbarMenuItem key={"allhomes-link"} icon={<IoHome />} text="All Homes" onClick={() => console.log("AllHomes")} activePage={false} />,
    <NavbarMenuItem key={"dashboard-link"}  icon={<IoPieChart />} text="Dashboard" onClick={() => console.log("Dashboard")} activePage={true} />,
];

const statItems = [
    <NavbarStats key={"somestats-stats"} stat="30" text="some stats (testing)" />,
    <NavbarStats key={"cost-stats"} stat="£4.50" text="cost" />,
    <NavbarStats key={"cool-stats"}  stat="60" text="some more stats (that are cool)" />,
];

export default function NewHome(props) {
    return (
        <>
            <Head>
                <title>New Home</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Body menuItems={navItems} statItems={statItems}>
                <div className="mx-12 my-2">
                    {/* To become the form component */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-5">
                        <h1 className="text-3xl col-span-1 md:col-span-2">
                            New Home
                        </h1>

                        {/* Image */}
                        <div className="w-full h-5">
                            <p>Image</p>
                        </div>

                        {/* Image Preview */}
                        <div className="w-full row-span-3">
                            <p>Image Preview</p>
                        </div>

                        {/* Name */}
                        <div className="w-full h-5">
                            <p>Name</p>
                        </div>

                        {/* Beds */}
                        <div className="w-full h-5">
                            <p>Beds</p>
                        </div>

                        {/* Cost Buffer */}
                        <div className="w-full h-5">
                            <p>Cost Buffer</p>
                        </div>

                        {/* Instructions */}
                        <div className="w-full row-span-2">
                            <p>Instructions</p>
                        </div>

                        {/* Energy Tariff (per kWh) */}
                        <div className="w-full h-5">
                            <p>Energy Tariff</p>
                        </div>
                    </div>
                </div>
            </Body>
        </>
    );
}

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions)
    const role = getRole(session);

    if (role !== Role.Agency) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    return {
        props: { session }
    }
}