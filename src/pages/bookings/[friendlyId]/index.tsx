import dbConnect from "../../../db/dbcon/dbcon";
import { useSession } from "next-auth/react";
import { authOptions } from "../../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

import Booking from "../../../db/models/Booking";
import Home from "../../../db/models/Home";
import Reading from "../../../db/models/Reading";
import User from "../../../db/models/User";

import { getDayMonth, sortDatesAscending, sortDatesDescending } from "../../../lib/utils/dates";
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

function displayCost(cost) {
    let costString = "0"
    if(cost > 0.00 && cost < 1) { costString = `${cost * 100}p` } 
    else { costString = `£${Math.round(cost * 100) / 100}`}
    return costString
}

// TO DO - UPDATE LINKS

export default function Index(props) {
    const readings = props.readings ? JSON.parse(props.readings) : null
    const startDate = getDayMonth(new Date(props?.booking?.startDateTime));
    const endDate = getDayMonth(new Date(props?.booking?.endDateTime), true);
    const descendingDates = [...readings];
    sortDatesDescending(descendingDates)

    const stats = [
        {
            stat: displayCost(props?.totalCostMinusBuffer),
            text: "Total Cost (minus Buffer)"
        },
        {
            stat: `${props?.totalUsage} kWh`,
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
            stat: displayCost(props?.booking?.home?.energyTariff),
            text: "Current Tariff (per kWh)" 
        });
        navItems.splice(0,1);
    }

    return (
        <Body menuItems={navItems} statItems={stats} 
            welcomeText={`Welcome to, ${props?.booking?.home.name}`}
            welcomeImage={props?.booking?.home?.image}
            currentPage={`Booking (${startDate} - ${endDate})`}>
                <div className="md:flex md:justify-between ">
                    <div className="md:w-[42%] my-10 ">
                        <div className="">
                            <ProgressBar num1={props?.booking?.home.energyBuffer} num2={props?.totalCost}
                                text1="Total Cost" text2="Buffer" />
                        </div>
                        <div className="mt-10 md:mt-16 mb-8">
                            <div className="flex justify-between">
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
                    <div className="md:w-[42%] md:flex md:justify-center" >
                        <div>
                            <Subtitle text1="Usage Per Day (kWh)" showbar={false}/>
                            <div className="ml-2 mt-3">
                                <BarChart rawData={readings} beginAtZero={true} 
                                    dateType={ChartDateType.DayMonth} unitOfMeasure={"kWh"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-14 md:mt-0 md:w-[42%]">
                    <Subtitle text1="Latest Readings" showbar={true}/>
                    <div className="mt-3">
                        <ReadingContainer readings={descendingDates}/>
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
            .sort("createdAt");

        const readings = [ ...rBefore, ...rRange, ...rAfter ];

        let totalUsage = 0
        let totalCost = 0
        let totalCostMinusBuffer = 0
        
        if (readings.length > 0) {
            totalUsage =  Number(readings[readings.length -1].value) - Number(readings[0].value)
            //@ts-ignore
            totalCost = totalUsage * Number(b.home.energyTariff)
            //@ts-ignore
            if(totalCost > Number(b.home.energyBuffer)) {
                //@ts-ignore
                totalCostMinusBuffer = totalCost - Number(b.home.energyBuffer)
            }
        } 
        
        //@ts-ignore
        const userRole = getRole(session, b.home)
        
        return {
            props: {
                booking: ToSeriableBooking(b),
                readings: JSON.stringify(readings),
                userRole: userRole,
                totalUsage: totalUsage,
                totalCost: totalCost,
                totalCostMinusBuffer: totalCostMinusBuffer,
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
