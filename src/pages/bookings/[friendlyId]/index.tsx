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

import Body from "../../../components/Body/Body";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import CompactLayout from "../../../components/layouts/CompactLayout/CompactLayout";
import Card, { CardType } from "../../../components/Card/Card";
import BarChart, { ChartDateType } from "../../../components/BarChart/BarChart";
import ReadingContainer from "../../../components/ReadingContainer/ReadingContainer";
import Subtitle from "../../../components/Subtitle/Subtitle";
import { ReadingComponentInterface } from "../../../components/Reading/Reading";
import {IoHome, IoPieChart, IoFlash, IoList, IoLogOut, IoTrendingDown, IoTrendingUp} from "react-icons/io5";


// TO DO - UPDATE LINKS

export default function Index(props) {
    const { data: session } = useSession();

    const isAgency = session?.user?.isAgency;

    // TO DO - make dynamic depending on user

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
            text: "Total Cost (minus Buffer)"
        },
        {
            stat: "27.2 kWh",
            text: "Total Usage"
        },
        {
            stat: `${props?.booking?.home?.energyTariff}p`,
            text: "Current Tariff (per kWh)"
        }
    ]


    const readings = props.readings ? JSON.parse(props.readings) : null
    
    const basicReadings = [
        {
          value: 100,
          createdAt: new Date("2014-05-01T10:02:03.839Z"),
        },
        {
          value: 102,
          createdAt: new Date("2015-05-02T10:02:03.839Z"),
        },
        {
          value: 110,
          createdAt: new Date("2015-05-03T10:02:03.839Z"),
        },
        {
          value: 125,
          createdAt: new Date("2015-05-04T10:02:03.839Z"),
        },
        {
          value: 70,
          createdAt: new Date("2015-05-05T10:02:03.839Z"),
        },
        {
          value: 130,
          createdAt: new Date("2020-05-06T10:02:03.839Z"),
        }
    ]

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
                                text1="Buffer" text2="Total Cost" />
                        </div>
                        <div className="md:my-16">
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
                    <div className="md:w-[60%] flex justify-center">
                        <BarChart rawData={props?.rRange} beginAtZero={true} 
                            dateType={ChartDateType.DayMonth} unitOfMeasure={"kWh"} />
                    </div>
                </div>
                <div className="md:w-[40%]">
                    <Subtitle text1="Latest Readings" text2="View More" showbar={true}/>
                    <ReadingContainer readings={readings}/>
                </div>
            
        </Body>

    )
}

export async function getServerSideProps({ req, res, params }) {
    await dbConnect();

    const session =  await getServerSession(req, res, authOptions)

    const isAgency = session?.user?.isAgency == true;
    const userId = session?.user?.id ?? "";


    try {
        const b = await Booking.findOne({ friendlyId : params.friendlyId })
            .populate("home", "_id name image energyBuffer energyTariff", Home)
            .lean();

        //@ts-ignore
        const r = await Reading.find({ home: b.home._id })
            .populate("user", "name", User)
            .sort("-createdAt")
            .limit(10);

        // get readings between start and end date, +1 day each side as one mongoose query
        // get range, then get one before (if exists), then get one after (if exists)

        //@ts-ignore
        const rRange = await Reading.find({ home: b.home._id, createdAt:{ $gte:b.startDateTime, $lt:b.endDateTime } })
            .select("-_id value createdAt")
            .lean();
        console.log(rRange)

        return {
            props: {
                booking: ToSeriableBooking(b),
                readings: JSON.stringify(r),
                readingsRange: JSON.stringify(rRange)
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
