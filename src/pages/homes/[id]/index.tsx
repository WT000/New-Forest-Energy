import dbConnect from "../../../db/dbcon/dbcon";
import { useSession } from "next-auth/react";
import { authOptions } from "../../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

import Booking from "../../../db/models/Booking";
import Home, { HomeInterface } from "../../../db/models/Home";
import Reading from "../../../db/models/Reading";
import User from "../../../db/models/User";

import { dateDiffInDays, getDayMonth, sortDatesAscending, sortDatesDescending } from "../../../lib/utils/dates";
import { ToSeriableHome } from "../../../lib/utils/json";
import getRole from "../../../lib/utils/getRole";
import Role from "../../../lib/utils/roles";

import Body from "../../../components/Body/Body";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import CompactLayout from "../../../components/layouts/CompactLayout/CompactLayout";
import Card, { CardType, BookingType } from "../../../components/Card/Card";
import BarChart, { ChartDateType } from "../../../components/BarChart/BarChart";
import ReadingContainer from "../../../components/ReadingContainer/ReadingContainer";
import HorizontalContainer from "../../../components/GridContainer/HorizontalContainer";
import Subtitle from "../../../components/Subtitle/Subtitle";
import {IoHome, IoPieChart, IoFlash, IoList, IoLogOut, IoTrendingDown, IoTrendingUp, IoQrCode, IoCreateSharp, IoClose} from "react-icons/io5";
import BookingLayout from "../../../components/layouts/BookingLayout/BookingLayout";
import DelegatesList from "../../../components/DelegatesList/DelegatesList";
import DelegatesListItem from "../../../components/DelegatesListItem/DelegatesListItem";
import Tile, { TileType } from "../../../components/Tile/Tile";
import { Toaster } from "react-hot-toast";
import Notification from "../../../components/Notification/Notifications";
import { useRouter } from "next/router";

function displayCost(cost) {
    let costString = "0"
    if(cost > 0.00 && cost < 1) { costString = `${cost * 100}p` } 
    else { costString = `£${Math.round(cost * 100) / 100}`}
    return costString
}

// TO DO - UPDATE LINKS

export default function Index(props) {
    const router = useRouter();
    
    const readings = props.readings ? JSON.parse(props.readings) : null;
    const bookings = props.bookings ? JSON.parse(props.bookings) : null;
    const delegates = props.delegates ? JSON.parse(props.delegates) : null;
    const home = props.home;

    // const startDate = getDayMonth(new Date(props?.booking?.startDateTime));
    // const endDate = getDayMonth(new Date(props?.booking?.endDateTime), true);
    const ascendingDates = [...readings];
    sortDatesAscending(ascendingDates)

    let bookingCards = []
    bookings.map((item, index) => {
        let endDate: Date = new Date(item.endDateTime);
        let startDate: Date = new Date(item.startDateTime);
        let now = new Date().getTime();
        let dateRange = getDayMonth(startDate) + " - " + getDayMonth(endDate)
        let duration = dateDiffInDays(startDate, endDate) || 1;
        const bookingLink = "../bookings/" + item.friendlyId
        const surroundingStlye = "hover:cursor-pointer"

        const bookingLayout = (<BookingLayout cost={-1} duration={duration} dateRange={dateRange}></BookingLayout>)

        if (endDate.getTime() < now) {
            bookingCards.push((<div onClick={() => router.push(bookingLink)} className={surroundingStlye}><Card key={index} cardType={CardType.booking} bookingType={BookingType.complete} children={bookingLayout}></Card></div>))
        } else if (startDate.getTime() > now ) {
            bookingCards.push((<div onClick={() => router.push(bookingLink)} className={surroundingStlye}><Card key={index} cardType={CardType.booking} bookingType={BookingType.planned} children={bookingLayout}></Card></div>))
        } else {
            bookingCards.push((<div onClick={() => router.push(bookingLink)} className={surroundingStlye}><Card key={index} cardType={CardType.booking} bookingType={BookingType.inProgress} children={bookingLayout}></Card></div>))
        }
    })

    let delegateItems = []
    delegates.map((item, index) => {
        let interactive = { onClick: () => {console.log("Clicked!");}, text: "Undo" }
        delegateItems.push(<DelegatesListItem key={index} image={item.image} username={item.name} onClick={Notification({text: "Delegate removed.", icon: <IoClose />, interactive: interactive })}></DelegatesListItem>)
    })

    const stats = [
        {
            stat: displayCost(props?.home.energyBuffer),
            text: "Cost Buffer (Daily)"
        },
        {
            stat: displayCost(props?.home.energyTariff),
            text: "Current Tariff (per kWh)"
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
            path: "#",
            activePage: true
        },
        {
            icon: <IoFlash />,
            text: "New Reading",
            path: "/homes/" + home._id + "/readings/new"
        },
        {
            icon: <IoList />,
            text: "Instructions",
            path: "/homes/" + home._id + "/instructions"
        },
        {
            icon: <IoLogOut />,
            text: "Sign Out",
            path: "/api/auth/signout"
        }
    ]

    // TODO: Necessary?
    if(props?.userRole == Role.Guest) {
        stats.push({
            stat: displayCost(props?.booking?.home?.energyTariff),
            text: "Current Tariff (per kWh)" 
        });
        navItems.splice(0,1);
    }

    return (
        <Body menuItems={navItems} statItems={stats} 
            welcomeText={`Welcome to, ${props?.home?.name}`}
            welcomeImage={props?.home?.image}
            currentPage='Dashboard'>
                <div className="md:flex md:justify-between ">
                    <div className="md:w-[42%] my-10 ">
                        <div className="md:flex md:justify-between mb-11">
                            <Tile tileType={TileType.link} 
                                children={<CompactLayout 
                                icon={<IoCreateSharp size="34px"/>}
                                textLine1="Edit Home"
                                textLine2="Details"></CompactLayout>} 
                                clickable={true} onClick={() => console.log("clicked")}></Tile>
                            <Tile tileType={TileType.link} 
                                children={<CompactLayout 
                                icon={<IoQrCode size="34px"/>}
                                textLine1="Print"
                                textLine2="QR Code"></CompactLayout>} 
                                clickable={true} onClick={() => console.log("clicked")}></Tile>
                        </div>
                        <div className="">
                            <ProgressBar num1={props?.home.energyBuffer} num2={props?.averagePerDay}
                                text1="Average per Day" text2="Buffer" />
                        </div>
                        <div className="mt-10 md:mt-16 mb-8">
                            <div className="flex justify-between">
                                <Card cardType={CardType.comparison}>
                                    <CompactLayout 
                                        icon={<IoTrendingUp size="34px" className="text-green-500"/>}
                                        textLine1={"vs Other Homes"}
                                        textLine2={"10% less"} />
                                </Card>
                                <Card cardType={CardType.comparison}>
                                    <CompactLayout 
                                        icon={<IoTrendingDown size="34px" className="text-orange"/>}
                                        textLine1={"vs Last Month"}
                                        textLine2={"12% more"} />
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[42%] md:flex" >
                        <div className="w-full">
                            <Subtitle text1="Usage Per Day (kWh)" showbar={false}/>
                            <div className="ml-2 mt-3">
                                <BarChart rawData={ascendingDates} beginAtZero={true} showDifference={true}
                                    dateType={ChartDateType.DayMonth} unitOfMeasure={"kWh"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex md:justify-between ">
                    <div className="mt-14 md:mt-0 md:w-[42%]">
                        <Subtitle text1="Latest Readings" showbar={true}/>
                        <div className="mt-3">
                            <ReadingContainer readings={readings} readingsPerLoad={8}/>
                        </div>
                    </div>
                    <div className="mt-14 md:mt-0 md:w-[42%]">
                        <Subtitle text1="Delegates" showbar={true}/>
                        <div className="mt-3">                            
                            <DelegatesList children={delegateItems} onClick={null}></DelegatesList>
                            <Toaster></Toaster>
                            {/* TODO: Horizontal Infinite Scroll */}
                        </div>
                        <div className="mt-10">
                        <Subtitle text1="Bookings" showbar={false}/>
                            <div className="mt-3">
                                <HorizontalContainer componentIterable={bookingCards} hideScrollbar={true}/>
                            </div>
                        </div>
                        <div className="md:flex mt-2">
                            <Card cardType={CardType.colourThumbnail} bookingType={BookingType.planned}></Card> 
                            <div className="-mt-1 ml-1.5 mr-3 text-[#77767A]">Planned</div>
                            <Card cardType={CardType.colourThumbnail} bookingType={BookingType.inProgress}></Card>
                            <div className="-mt-1 ml-1.5 mr-3 text-[#77767A]">In Progress</div>
                            <Card cardType={CardType.colourThumbnail} bookingType={BookingType.complete}></Card>
                            <div className="-mt-1 ml-1.5 mr-3 text-[#77767A]">Complete</div>
                        </div>
                    </div>
                </div>
        </Body>

    )
}

export async function getServerSideProps({ req, res, params }) {
    await dbConnect();

    const session =  await getServerSession(req, res, authOptions)

    try {
        const h = await Home.findById(params.id).populate({path: "delegates", populate: {path: 'name'}}).lean();

        const hNoDelegates = {
            ...h,
            delegates: (h.delegates as any).map(x => x._id)
        } as HomeInterface

        //@ts-ignore
        const readings = await Reading.find({ home: h._id, })
            .populate("user", "name", User)
            .sort({"createdAt": -1});
            let averagePerDay = 0;
        if (readings.length > 0) {
            const firstReading = readings[0];
            const lastReading = readings[readings.length -1];
            let daysElapsed = dateDiffInDays(lastReading.createdAt, firstReading.createdAt) || 1;
            averagePerDay = (Number(lastReading.value) - Number(firstReading.value)) / daysElapsed;
        }

        const bookings = await Booking.find({home: h._id, isDeleted: false}).sort({"createdAt": -1}).lean()
        const delegates = h.delegates;       
        const userRole = getRole(session, hNoDelegates);

        // Booking Costs
        const bookingCosts = await Promise.all(bookings.map(async booking => { 
            const b = new Booking(booking);
            const cost = await b.calculateCost(0);
            return {id: booking._id, cost};
        })).then((y) => {return y;})

        // const results = await Promise.all(bookings.map(async booking => {      
        //     const b = new Booking(booking);
        //     let bookingResult = await b.calculateCost(0).then((cost) => {
        //         return cost
        //     }).then((x) => {return x;})
        //     return {bookingResult}
        // })).then((y) => {return y;})
        
        console.log(bookingCosts)

        if (userRole === Role.Guest) {
            return {
                redirect: {
                    destination: "/auth/guest",
                    permanent: false,
                },
            };
        }
        /**
         * TODO: Role specific info?
         * TODO: QR code & Edit Home tiles 
         * TODO: Comparisons
         */
        
        return {
            props: {
                home: ToSeriableHome(h),
                readings: JSON.stringify(readings),
                bookings: JSON.stringify(bookings),
                delegates: JSON.stringify(delegates),
                userRole: userRole,
                averagePerDay: averagePerDay ?? 0.00,
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
