import dbConnect from "../../../db/dbcon/dbcon";
import { useSession } from "next-auth/react";
import { authOptions } from "../../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

import Head from "next/head";
import Body from "../../../components/Body/Body";
import Booking from "../../../db/models/Booking";
import Stats from "../../../components/Stats/Stats";
import Card from "../../../components/Card/Card";
import { CardType } from "../../../components/Card/Card";
import {IoHome, IoPieChart, IoFlash, IoList, IoLogOut} from "react-icons/io5";


// TO DO - UPDATE LINKS

export default function Index({props}) {
    const { data: session } = useSession();

    const isAgency = session?.user?.isAgency;

    const navItems = [
        {
            icon: <IoHome />,
            text: "All Homes",
            path: "/homes",
        },
        {
            icon: <IoPieChart />,
            text: "Dashboard",
            path: "/",
            activePage: true
        },
        {
            icon: <IoFlash />,
            text: "New Reading",
            path: "/"
        },
        {
            icon: <IoList />,
            text: "Instructions",
            path: "/"
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
                <title>Energise</title>
                <meta name="description" content="Booking Dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Body menuItems={navItems} statItems={stats} 
                welcomeText={`Booking (${props.booking.startDateTime.getDate()} - ${props.booking.endDateTime.getDate()} ${props.booking.startDateTime.toLocaleString('default', { month: 'long'})})`}
                welcomeImage={props.home.image}
                currentPage="Dashboard"
            >
                <div className="space-x-6 w-full flex md:hidden">
                    {stats.map((stat) => (
                        <Card cardType={CardType.stats}>
                            <Stats stat={stat.stat} text={stat.text}/>
                        </Card>
                    ))}
                </div>
                
            </Body>
        </>
        



       
    )
}

export async function getServerSideProps({ req, res, params }) {
    await dbConnect();

    const session =  await getServerSession(req, res, authOptions)

    const isAgency = session?.user?.isAgency == true;
    const userId = session?.user?.id ?? "";


    try{

    }
    catch (e) {
        console.log(e.message);

        return {
            notFound: true,
        };
    }
}
