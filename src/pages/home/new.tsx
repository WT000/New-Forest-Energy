import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import Head from "next/head";
import { IoBed, IoFlash, IoFootsteps, IoHome, IoImages, IoLogOut, IoPieChart, IoSave, IoText, IoWallet } from "react-icons/io5";
import Body from "../../components/Body/Body";
import NavbarMenuItem from "../../components/navbar/NavbarMenuItem/NavbarMenuItem";
import NavbarStats from "../../components/Stats/Stats";
import getRole from "../../lib/utils/getRole";
import Role from "../../lib/utils/roles";
import { useSession } from "next-auth/react";
import InputLayout from "../../components/layouts/InputLayout/InputLayout";
import Tile from "../../components/Tile/Tile";
import { TileType } from "../../components/Tile/Tile";
import Button from "../../components/Button/Button";
import InstructionsLayout from "../../components/layouts/InstructionsLayout/InstructionsLayout";
import HomeForm from "../../components/forms/HomeForm/HomeForm";
import mongoose from "mongoose";
import Home from "../../db/models/Home";
import Booking from "../../db/models/Booking";
import { ToSeriable } from "../../lib/utils/homes";



export default function NewHome(props) {
    const {userSession} = props;

    const navItems = [
        {
            icon: <IoHome />,
            text: "All Homes",
            path: "/homes",
            activePage: true
        },
        {
            icon: <IoLogOut />,
            text: "Sign Out",
            path: "/api/auth/signout"
        }
    ]

    const stats = [
        {
            stat: props?.stats?.homes,
            text: "Homes"
        },
        {
            stat: props?.stats?.bookingsLast3Months,
            text: "Bookings (Last 3 Months)"
        },
        {
            stat: props?.stats?.bookingsLast12Months,
            text: "Bookings (Last 12 Months)"
        }
    ]

    return (
        <>
            <Head>
                <title>New Home</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Body statItems={stats} menuItems={navItems} welcomeText={`Welcome back, ${userSession?.user?.name}`} welcomeImage={userSession?.user?.image} currentPage="New Home">
                <HomeForm/>
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

    const isAgency = session?.user?.isAgency == true;
    const userId = session?.user?.id ?? "";


    try{
        const filter = isAgency ? {} : { $or: [{ delegates: new mongoose.Types.ObjectId(userId) }, {owner: new mongoose.Types.ObjectId(userId)}] } 

        const homesTask = Home.find(filter);

        const homeCountTask = Home.count(filter);

        const homes = await homesTask;

        const homeIds = homes.map(x => x._id);

        const bookingsLast3MonthsTask = Booking.count({
            'home': { $in : homeIds},
            "startDateTime": 
                {
                    $gte: new Date((new Date().getTime() - (90 * 24 * 60 * 60 * 1000)))
                }
        });

        const bookingsLast12MonthsTask = Booking.count({
            'home': { $in : homeIds},
            "startDateTime": 
                {
                    $gte: new Date((new Date().getTime() - (365 * 24 * 60 * 60 * 1000)))
                }
        });


        return {
            props: {
                stats: {
                    homes: (await homeCountTask).toString(),
                    bookingsLast3Months: (await bookingsLast3MonthsTask).toString(),
                    bookingsLast12Months: (await bookingsLast12MonthsTask).toString()
                },
                homes: homes.map(x => ToSeriable(x)),
                userSession: session,
            },
        };
    }
    catch (e) {
        console.log(e.message);

        return {
            notFound: true,
        };
    }

    // return {
    //     props: {
    //         userSession: session,
    //     },
    // };
}
