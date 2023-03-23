import { useSession } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]";
import Body from "../../components/Body/Body";
import getRole from "../../lib/utils/getRole";
import Home from "../../db/models/Home";


import {IoAdd, IoHome, IoLogOut, IoPieChart, IoSearch, IoText} from "react-icons/io5";
import dbConnect from "../../db/dbcon/dbcon";
import Tile, { TileType } from "../../components/Tile/Tile";
import Image from "next/image";
import InputLayout from "../../components/layouts/InputLayout/InputLayout";
import HomeLayout from "../../components/layouts/HomeLayout/HomeLayout";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import mongoose, { set } from "mongoose";
import Booking from "../../db/models/Booking";
import { ToSeriableHome } from "../../lib/utils/json";

import { useState } from "react";

export default function AllHomes(props){

    const [searchQuery, setSearchQuery] = useState(null)

    const { data: session } = useSession();

    const isAgency = session?.user?.isAgency;
    
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

    if(isAgency){
        navItems.splice(1, 0,       
            {
                icon: <IoAdd className="h-5 w-5" />,
                text: "New Home",
                path: "/homes/new"
            }
        )
    }

    const homeTiles = props?.homes
            ?.filter(x => searchQuery == null || searchQuery == "" || 
                x.name.toLowerCase().split(" ").some(y => y.startsWith(searchQuery.toLowerCase()))).map(x => {
        return (
            <Link key={x._id} href={`/homes/${x._id}`}>
                <Tile  tileType ={TileType.home} clickable={true} onClick={() => console.log("Clicked")}>
                    <HomeLayout image={x.image} name={x.name} sleeps={x.numBeds}/>
                </Tile>
            </Link>

        )
    })

    
    return (
        <Body statItems={stats} menuItems={navItems} welcomeText={`Welcome back, ${session?.user?.name}`} welcomeImage={session?.user?.image} currentPage="Homes">
            <section className="pt-4">
                <Tile tileType ={TileType.input} clickable={false}>
                    <InputLayout onChange={(e) => setSearchQuery(e.target.value)} icon={<IoSearch size="32px"/>} text="Search" type="text" name="search_query" placeholder="My Search Query..."/>
                </Tile>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 gap-4">
                    {homeTiles}
                </div>
            </section>
        </Body>
    )
}

export async function getServerSideProps({ req, res, params }) {
    await dbConnect();


    const session =  await getServerSession(req, res, authOptions)

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
                homes: homes.map(x => ToSeriableHome(x))
            },
        };
    }
    catch (e) {
        console.log(e.message);

        return {
            notFound: true,
        };
    }
}