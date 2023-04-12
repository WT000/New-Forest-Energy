import dbConnect from "../../../db/dbcon/dbcon";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authOptions } from "../../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { Toaster } from "react-hot-toast";

import Booking from "../../../db/models/Booking";
import Home from "../../../db/models/Home";
import Reading from "../../../db/models/Reading";
import User from "../../../db/models/User";

import { dateDiffInDays, getDayMonth, sortDatesAscending, sortDatesDescending } from "../../../lib/utils/dates";
import { ToSeriableBooking } from "../../../lib/utils/json";
import { percentageDiff } from "../../../lib/utils/nums";
import getRole from "../../../lib/utils/getRole";
import Role from "../../../lib/utils/roles";

import Body from "../../../components/Body/Body";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import CompactLayout from "../../../components/layouts/CompactLayout/CompactLayout";
import Card, { CardType } from "../../../components/Card/Card";
import Tile, { TileType } from "../../../components/Tile/Tile";
import BarChart, { ChartDateType } from "../../../components/BarChart/BarChart";
import ReadingContainer from "../../../components/ReadingContainer/ReadingContainer";
import Subtitle from "../../../components/Subtitle/Subtitle";
import Notification from "../../../components/Notification/Notifications"
import {IoHome, IoPieChart, IoFlash, IoList, IoLogOut, IoTrendingDown, IoTrendingUp, IoCreate, IoShareSocial, IoClose} from "react-icons/io5";


function displayCost(cost) {
    let costString = "0"
    if(cost > 0.00 && cost < 1) { costString = `${cost * 100}p` } 
    else { costString = `£${Math.round(cost * 100) / 100}`}
    return costString
}


// TO DO - UPDATE LINKS

export default function Index(props) {
    const router = useRouter();
    const [currentPath, setCurrentPath] = useState("");
    useEffect(() => {if (window) {setCurrentPath(window.location.href)}});

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
            path: `/bookings/${props?.booking?.friendlyId}`,
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
            path: `/homes/${props?.booking?.home?._id}/instructions`
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

    const otherGuestsComparisonTextWording = Math.abs((props.otherGuestsComparison * 100)).toFixed(0) + '%' + " " + (props.otherGuestsComparison > 0 ? "more" : "less")
    const otherGuestsIcon = props.otherGuestsComparison > 0 ? <IoTrendingUp size="34px" className="text-orange"/> : <IoTrendingDown size="34px" className="text-green-500"/>

    const otherHomesComparisonTextWording = Math.abs((props.similarHomesComparison * 100)).toFixed(0) + '%' + " " + (props.similarHomesComparison > 0 ? "more" : "less")
    const otherHomesIcon = props.similarHomesComparison > 0 ? <IoTrendingUp size="34px" className="text-orange"/> : <IoTrendingDown size="34px" className="text-green-500"/>

    return (
        <Body menuItems={navItems} statItems={stats} 
            welcomeText={`Welcome to, ${props?.booking?.home.name}`}
            welcomeImage={props?.booking?.home?.image}
            currentPage={`Booking (${startDate} - ${endDate})`}>
                <div className="md:flex md:justify-between ">
                    <div className="md:w-[42%] my-10 ">
                        {props?.userRole != Role.Guest && (
                            <div className="flex justify-between mb-8 md:mb-11">
                            <Tile tileType={TileType.link} 
                                children={<CompactLayout 
                                icon={<IoCreate size="34px"/>}
                                textLine1="Edit Booking"
                                textLine2="Details"></CompactLayout>} 
                                clickable={true} onClick={() => router.push(`/bookings/${props?.booking?.friendlyId}/edit`)}></Tile>
                            <Tile tileType={TileType.link} 
                                children={<CompactLayout 
                                icon={<IoShareSocial size="34px"/>}
                                textLine1="Share Link"
                                textLine2="Booking"></CompactLayout>} 
                                clickable={true} onClick={() => {
                                    navigator.clipboard.writeText(currentPath);
                                    Notification({text: "Link copied to clipboard.", icon: <IoClose />})
                                }}></Tile>
                                <Toaster></Toaster>
                            </div>
                        )}
                        <div className="">
                            <ProgressBar num1={props?.booking?.home.energyBuffer} num2={props?.totalCost}
                                text1="Total Cost" text2="Buffer" />
                        </div>
                        <div className="mt-10 md:mt-16 mb-8">
                            <div className="flex justify-between">
                                <Card cardType={CardType.comparison}>
                                    <CompactLayout 
                                        icon={otherGuestsIcon}
                                        textLine1={"vs Other Guests"}
                                        textLine2={otherGuestsComparisonTextWording} />
                                </Card>
                                <Card cardType={CardType.comparison}>
                                    <CompactLayout 
                                        icon={otherHomesIcon}
                                        textLine1={"vs Similar Homes"}
                                        textLine2={otherHomesComparisonTextWording} />
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
            .populate("home", "_id owner delegates name image energyBuffer energyTariff numBeds", Home)
            .lean();

        console.log(b);

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
        let totalDays = 0
        
        if (readings.length > 0) {
            if(readings.length > 1){
                totalUsage =  readings[readings.length -1].value - readings[0].value
            }
            else{
                totalUsage =  readings[0].value
            }
            

            totalDays = dateDiffInDays(readings[readings.length -1].createdAt, readings[0].createdAt) || 1
            //@ts-ignore
            totalCost = totalUsage * b.home.energyTariff
            //@ts-ignore
            if(totalCost > Number(b.home.energyBuffer)) {
                //@ts-ignore
                totalCostMinusBuffer = totalCost - Number(b.home.energyBuffer)
            }
        } 
        
        //@ts-ignore
        const userRole = getRole(session, b.home)
        
        //@ts-ignore
        const oldestReading = await Reading.findOne({home: b.home._id}, {}, { sort: { 'createdAt' : -1 } });

        //@ts-ignore
        const newestReading = await Reading.findOne({home: b.home._id}, {}, { sort: { 'createdAt' : 1 } });

        const daysDiff = dateDiffInDays(oldestReading.createdAt, newestReading.createdAt) || 1;
        const readingDiff = newestReading.value - oldestReading.value
        const houseAveragePerDay = (readingDiff > 0 ? readingDiff : 0) / daysDiff
    
        const bookingAveragePerDay = (totalUsage > 0 ? totalUsage : 0) / totalDays
        
        const otherGuestsPercentageDiff = percentageDiff(bookingAveragePerDay, houseAveragePerDay, true);        

        //https://www.ofgem.gov.uk/information-consumers/energy-advice-households/average-gas-and-electricity-use-explained
        //@ts-ignore
        const similarHomeUsageDaily = b.home.numBeds < 2 ? 4.93 : b.home.numBeds < 4 ? 7.94 : 11.78
        const similarHomesPercentageDiff = percentageDiff(bookingAveragePerDay, similarHomeUsageDaily, true);    

        return {
            props: {
                booking: ToSeriableBooking(b),
                readings: JSON.stringify(readings),
                userRole: userRole,
                totalUsage: totalUsage,
                totalCost: totalCost,
                totalCostMinusBuffer: totalCostMinusBuffer,
                otherGuestsComparison : otherGuestsPercentageDiff,
                similarHomesComparison: similarHomesPercentageDiff
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
