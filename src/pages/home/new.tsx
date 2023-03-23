import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import Head from "next/head";
import { IoHome, IoImages, IoPieChart } from "react-icons/io5";
import Body from "../../components/Body/Body";
import NavbarMenuItem from "../../components/navbar/NavbarMenuItem/NavbarMenuItem";
import NavbarStats from "../../components/Stats/Stats";
import getRole from "../../lib/utils/getRole";
import Role from "../../lib/utils/roles";
import { useSession } from "next-auth/react";
import InputLayout from "../../components/layouts/InputLayout/InputLayout";
import Tile from "../../components/Tile/Tile";
import { TileType } from "../../components/Tile/Tile";

const navItems = [
    <NavbarMenuItem key={"allhomes-link"} icon={<IoHome />} text="All Homes" onClick={() => console.log("AllHomes")} activePage={false} />,
    <NavbarMenuItem
        key={"dashboard-link"}
        icon={<IoPieChart />}
        text="Dashboard"
        onClick={() => console.log("Dashboard")}
        activePage={true}
    />,
];

const statItems = [
    <NavbarStats key={"somestats-stats"} stat="30" text="some stats (testing)" />,
    <NavbarStats key={"cost-stats"} stat="£4.50" text="cost" />,
    <NavbarStats key={"cool-stats"} stat="60" text="some more stats (that are cool)" />,
];

export default function NewHome(props) {
    const {userSession} = props;

    return (
        <>
            <Head>
                <title>New Home</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Body menuItems={navItems} statItems={statItems} session={userSession}>
                <h1 className="mx-12 mb-4 text-3xl col-span-1 md:col-span-2">New Home</h1>

                <div className="mx-12 my-2">
                    {/* To become the form component */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-5">
                        {/* Image */}
                        <Tile tileType={TileType.input} clickable={false}>
                            <InputLayout icon={<IoImages size="32px"/>} text={"Home Image"} type={"file"} name={"image"} placeholder={"Select Image"}/>
                        </Tile>

                        {/* Image Preview */}
                        {/* May need a custom size set on md: breakpoint */}
                        <Tile tileType={TileType.fill} customClass="row-span-3" clickable={false}>
                            <p>Image Preview</p>
                        </Tile>

                        {/* Name */}
                        <Tile tileType={TileType.input} clickable={false}>
                            <InputLayout icon={<IoImages size="32px"/>} text={"Home Name"} type={"text"} name={"name"} placeholder={"My New Home..."}/>
                        </Tile>

                        {/* Beds */}
                        <Tile tileType={TileType.input} clickable={false}>
                            <InputLayout icon={<IoImages size="32px"/>} text={"Number of Beds"} type={"number"} name={"beds"} placeholder={"4"}/>
                        </Tile>

                        {/* Cost Buffer */}
                        <Tile tileType={TileType.input} clickable={false}>
                            <InputLayout icon={<IoImages size="32px"/>} text={"Cost Buffer"} type={"number"} name={"costbuffer"} placeholder={"2.23"}/>
                        </Tile>

                        {/* Instructions */}
                        {/* May need a custom size set on md: breakpoint */}
                        <Tile tileType={TileType.fill} customClass="row-span-2" clickable={false}>
                            <InputLayout icon={<IoImages size="32px"/>} text={"Instructions"} type={"textarea"} name={"instructions"} placeholder={"Enter the room to the left of..."}/>
                        </Tile>

                        {/* Energy Tariff (per kWh) */}
                        <Tile tileType={TileType.input} clickable={false}>
                            <InputLayout icon={<IoImages size="32px"/>} text={"Energy Tariff (per Kwh)"} type={"number"} name={"energytariff"} placeholder={"2.23"}/>
                        </Tile>
                    </div>
                </div>
            </Body>
        </>
    );
}

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions);
    const role = getRole(session);

    if (role !== Role.Agency) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {
            userSession: session,
        },
    };
}