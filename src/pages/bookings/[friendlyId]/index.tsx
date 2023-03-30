import dbConnect from "../../../db/dbcon/dbcon";
import { useSession } from "next-auth/react";
import { authOptions } from "../../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

import Booking from "../../../db/models/Booking";
import Home from "../../../db/models/Home";
import Reading from "../../../db/models/Reading";
import User from "../../../db/models/User";

import { getDayMonth } from "../../../lib/utils/dates";
import { ToSeriableBooking } from "../../../lib/utils/json";
import getRole from "../../../lib/utils/getRole";
import Role from "../../../lib/utils/roles";

import Body from "../../../components/Body/Body";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import CompactLayout from "../../../components/layouts/CompactLayout/CompactLayout";
import Card, { CardType } from "../../../components/Card/Card";
import BarChart, { ChartDateType } from "../../../components/BarChart/BarChart";
import ReadingContainer from "../../../components/ReadingContainer/ReadingContainer";
import Subtitle from "../../../components/Subtitle/Subtitle";
import {IoHome, IoPieChart, IoFlash, IoList, IoLogOut, IoTrendingDown, IoTrendingUp} from "react-icons/io5";


// TO DO - UPDATE LINKS

export default function Index(props) {
    const readings = props.readings ? JSON.parse(props.readings) : null
    
    const stats = [
        {
            stat: "£1.77",
            text: "Total Cost (minus Buffer)"
        },
        {
            stat: "27.2 kWh",
            text: "Total Usage"
        }
    ]

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

    if(props?.userRole == Role.Guest) {
        stats.push({
            stat: `${props?.booking?.home?.energyTariff}p`,
            text: "Current Tariff (per kWh)" 
        });
        navItems.splice(0,1);
    }

    

    const startDate = getDayMonth(new Date(props?.booking?.startDateTime));
    const endDate = getDayMonth(new Date(props?.booking?.endDateTime), true);

    return (
        <Body menuItems={navItems} statItems={stats} 
            welcomeText={`Welcome to, ${props?.booking?.home.name}`}
            welcomeImage={props?.booking?.home?.image}
            currentPage={`Booking (${startDate} - ${endDate})`}>
                <div className="flex justify-between">
                    <div className="md:w-[40%] md:my-10">
                        <div className="">
                            <ProgressBar num1={props?.booking?.home.energyBuffer} num2={4.50}
                                text1="Total Cost" text2="Buffer" />
                        </div>
                        <div className="md:mt-16 md:mb-8">
                            <div className="flex justify-evenly">
                                <Card cardType={CardType.comparison}>
                                    <CompactLayout 
                                        icon={<IoTrendingUp size="34px" className="text-green-500"/>}
                                        textLine1={"vs Other Guests"}
                                        textLine2={"10% less"} />
                                </Card>
                                <Card cardType={CardType.comparison}>
                                    <CompactLayout 
                                        icon={<IoTrendingDown size="34px" className="text-orange"/>}
                                        textLine1={"vs Similar Homes"}
                                        textLine2={"12% more"} />
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[60%] flex justify-center" >
                        <div>
                            <Subtitle text1="Usage Per Day (kWh)" showbar={false}/>
                            <div className="md:ml-2 md:mt-3">
                                <BarChart rawData={readings} beginAtZero={true} 
                                    dateType={ChartDateType.DayMonth} unitOfMeasure={"kWh"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-[40%]">
                    <Subtitle text1="Latest Readings" text2="View More" showbar={true}/>
                    <div className="mt-3">
                        <ReadingContainer readings={readings}/>
                    </div>
                </div>
            
        </Body>

    )
}

export async function getServerSideProps({ req, res, params }) {
    await dbConnect();

    const session =  await getServerSession(req, res, authOptions)

    try {
        const b = await Booking.findOne({ friendlyId : params.friendlyId })
            .populate("home", "_id name image energyBuffer energyTariff", Home)
            .lean();

        //@ts-ignore
        const rBefore = await Reading.find({ home: b.home._id,  createdAt: { $lt:b.startDateTime } })
            .populate("user", "name", User)
            .sort("-createdAt")
            .limit(1);
        
        //@ts-ignore
        const rAfter = await Reading.find({ home: b.home._id,  createdAt: { $gte:b.endDateTime } })
            .populate("user", "name", User)
            .sort("createdAt")
            .limit(1);

        //@ts-ignore
        const rRange = await Reading.find({ home: b.home._id, createdAt: { $gte:b.startDateTime, $lt:b.endDateTime } })
            .populate("user", "name", User)
            .sort("-createdAt");

        const readings = [ ...rBefore, ...rRange, ...rAfter ];

        const userRole = getRole(session)

        return {
            props: {
                booking: ToSeriableBooking(b),
                readings: JSON.stringify(readings),
                userRole: userRole
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
