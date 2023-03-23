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
import { getDayMonth } from "../../../lib/utils/dates";
import { ToSeriableBooking } from "../../../lib/utils/json";


// TO DO - UPDATE LINKS

export default function Index(props) {
    const { data: session } = useSession();
    console.log(props.booking)

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
            path: "/1",
            activePage: true
        },
        {
            icon: <IoFlash />,
            text: "New Reading",
            path: "/2"
        },
        {
            icon: <IoList />,
            text: "Instructions",
            path: "/3"
        },
        {
            icon: <IoLogOut />,
            text: "Sign Out",
            path: "/api/auth/signout"
        }
    ]

    const stats = [
        {
            stat: "£1.77",
            text: "Homes"
        },
        {
            stat: "test",
            text: "Bookings (Last 3 Months)"
        },
        // {
        //     stat: props?.stats?.bookingsLast12Months,
        //     text: "Bookings (Last 12 Months)"
        // }
    ]

    const startDate = getDayMonth(new Date(props?.booking?.startDateTime));
    const endDate = getDayMonth(new Date(props.booking.endDateTime), true);

    return (
        <>
            <Head>
                <title>Energise</title>
                <meta name="description" content="Booking Dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Body menuItems={navItems} statItems={stats} 
                welcomeText={`Welcome to, ${"test"}`}
                welcomeImage={"test"}
                currentPage={`Booking (${startDate} - ${endDate})`}
            >
                <div className="w-full flex justify-evenly md:hidden">
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


    try {
        let b = await Booking.findOne({friendlyId : params.friendlyId});
        // get home image and home name when obtaining book

        // get readings between start and end date, +1 day each side as one mongoose query
        // get range, then get one before (if exists), then get one after (if exists)

        return {
            props: {
                booking: ToSeriableBooking(b),
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
