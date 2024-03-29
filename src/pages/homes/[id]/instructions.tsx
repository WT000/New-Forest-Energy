import { useSession } from "../../../hooks/useSession";
import { authOptions } from "../../api/auth/[...nextauth]";
import Body from "../../../components/Body/Body";
import getRole from "../../../lib/utils/getRole";
import Home from "../../../db/models/Home";


import {IoAdd, IoHome, IoLogOut, IoPieChart, IoSearch, IoText} from "react-icons/io5";
import dbConnect from "../../../db/dbcon/dbcon";
import Tile, { TileType } from "../../../components/Tile/Tile";
import Image from "next/image";
import InputLayout from "../../../components/layouts/InputLayout/InputLayout";
import HomeLayout from "../../../components/layouts/HomeLayout/HomeLayout";
import Link from "next/link";
import { getServerSession } from "../../../hooks/getServerSession";
import mongoose, { set } from "mongoose";
import Booking from "../../../db/models/Booking";
import { ToSeriableHome } from "../../../lib/utils/json";
import InstructionsLayout from "../../../components/layouts/InstructionsLayout/InstructionsLayout";




import { useState } from "react";

export default function AllHomes(props){

    const [searchQuery, setSearchQuery] = useState(null)

    const [homes, setHomes] = useState(props?.homes)

    const session = props?.userSession;

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
        <Body statItems={stats} menuItems={navItems} welcomeText={`Welcome back, ${session?.user?.name}`} welcomeImage={session?.user?.image} currentPage="Instructions">
            <br></br>
            <Tile tileType={TileType.box} clickable={false}>
            <InstructionsLayout text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} editable={false}></InstructionsLayout>
            </Tile>
        </Body>
    )
}

export async function getServerSideProps({ req, res, params }) {
    await dbConnect();


    const session =  await getServerSession(req, res, authOptions)

    const isAgency = session?.user?.isAgency == true;
    const userId = session?.user?.id ?? "";

    try{
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
                userSession: session,
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