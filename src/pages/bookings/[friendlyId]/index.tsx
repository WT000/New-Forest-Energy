import dbConnect from "../../../db/dbcon/dbcon";
import { useSession } from "next-auth/react";
import { authOptions } from "../../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

import Body from "../../../components/Body/Body";
import Booking from "../../../db/models/Booking";
import {IoHome, IoPieChart, IoFlash, IoList, IoLogOut} from "react-icons/io5";
import { getDayMonth } from "../../../lib/utils/dates";
import { ToSeriableBooking } from "../../../lib/utils/json";
import Home from "../../../db/models/Home";


// TO DO - UPDATE LINKS

export default function Index(props) {
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
            stat: "to do",
            text: "Total Cost (minus Buffer)"
        },
        {
            stat: "to do",
            text: "Total Usage"
        },
        {
            stat: `${props?.booking?.home?.energyTariff}p`,
            text: "Current Tariff (per kWh)"
        }
    ]

    const startDate = getDayMonth(new Date(props?.booking?.startDateTime));
    const endDate = getDayMonth(new Date(props?.booking?.endDateTime), true);

    return (
        <Body menuItems={navItems} statItems={stats} 
            welcomeText={`Welcome to, ${props?.booking?.home.name}`}
            welcomeImage={props?.booking?.home?.image}
            currentPage={`Booking (${startDate} - ${endDate})`}>

                <p>Test</p>
            
        </Body>

    )
}

export async function getServerSideProps({ req, res, params }) {
    await dbConnect();

    const session =  await getServerSession(req, res, authOptions)

    const isAgency = session?.user?.isAgency == true;
    const userId = session?.user?.id ?? "";


    try {
        let b = await Booking.findOne({friendlyId : params.friendlyId})
        .populate("home", "_id name image energyBuffer energyTariff", Home)
        .lean();


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
