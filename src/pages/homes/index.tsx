import { useSession } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]";
import Body from "../../components/Body/Body";
import getRole from "../../lib/utils/getRole";
import Home from "../../db/models/Home";
import Notification from "../../components/Notification/Notifications";


import {IoAdd, IoClose, IoHome, IoLogOut, IoPieChart, IoSearch, IoText} from "react-icons/io5";
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

import { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useExtendedState } from "../../lib/utils/react";

export default function AllHomes(props){

    const [searchQuery, setSearchQuery] = useState(null)

    const [homes, setHomes, getHomes] = useExtendedState(props?.homes)

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

    function deleteHome(e, id){
        e.preventDefault()
        //TODO - delete this log & replace with deleting home API call?
        console.log("tmp deleting:", id);
        fetch(`/api/homes/${id}`, { method: 'DELETE' })
        .then((res) => res.json())
        .then((data) => {
            if(data.success){

                let filteredArray = homes.filter(home => home._id !== id)
                setHomes(filteredArray)

                const notification = Notification({
                    text: "Home Deleted",
                    icon: <IoClose />,
                    interactive: { text: "Undo", onClick: () => {
                        fetch(`/api/homes/${id}/restore`, { method: 'PUT' })
                        .then((res) => res.json())
                        .then(async (data) => {
                            if(data.home){
                                var currentHomes = await getHomes();

                                if (!currentHomes.some(e => e._id === data.home._id)){
                                    setHomes([...currentHomes, data.home])
                                }
                            }
                        });
                    } },
                    duration: 5000,
                });

                notification();
            }
        })
    }

    const homeTiles = homes
            ?.filter(x => searchQuery == null || searchQuery == "" || 
                x.name.toLowerCase().split(" ").some(y => y.startsWith(searchQuery.toLowerCase()))).map(x => {
        return (
            <Link key={x._id} href={`/homes/${x._id}`}>
                <Tile tileType ={TileType.home} clickable={true} onClick={() => console.log("Clicked")}>
                    <HomeLayout onClick={isAgency ? (e) => deleteHome(e, x._id) : null} image={x.image} name={x.name} sleeps={x.numBeds}/>
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
            <Toaster/>
        </Body>
    )
}

export async function getServerSideProps({ req, res, params }) {
    await dbConnect();

    const session =  await getServerSession(req, res, authOptions)

    const isAgency = session?.user?.isAgency == true;
    const userId = session?.user?.id ?? "";

    try{
        // This will error with a "arguments passed in must be..." message, this is because userId doesn't exist!
        // It still works as intended (as this error will only occur for signed out users, giving them a 404 page), but we may want to redirect
        // instead if session is null
        const filter = isAgency ? {isDeleted: { $ne: true }} : {$and: [ {isDeleted: { $ne: true }} , { $or: [{ delegates: new mongoose.Types.ObjectId(userId) }, {owner: new mongoose.Types.ObjectId(userId)}]}] } 
        
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