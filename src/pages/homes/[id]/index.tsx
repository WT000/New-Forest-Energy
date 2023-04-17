import dbConnect from "../../../db/dbcon/dbcon";
import { authOptions } from "../../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { Toaster } from "react-hot-toast";
import React, { useEffect, useState } from "react";

import Booking from "../../../db/models/Booking";
import Home, { HomeInterface } from "../../../db/models/Home";
import Reading from "../../../db/models/Reading";
import User from "../../../db/models/User";

import { dateDiffInDays, getDayMonth, sortDatesAscending, subtractMonths } from "../../../lib/utils/dates";
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
import Notification from "../../../components/Notification/Notifications";
import Popup from "../../../components/Popup/Popup";
import QRCode from "../../../components/QRCode/QRCode";
import ReadingPopup from "../../../components/layouts/ReadingPopupLayout/ReadingPopupLayout";
import { useRouter } from "next/router";
import { percentageDiff } from "../../../lib/utils/nums";

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
    const bookingCosts = props.bookingCosts ? JSON.parse(props.bookingCosts) : null;
    const delegates = props.delegates ? JSON.parse(props.delegates) : null;
    const home = props.home;

    const [currentPath, setCurrentPath] = useState("");
    useEffect(() => {if (window) {setCurrentPath(window.location.protocol + "//" + window.location.hostname)}});
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupData, setPopupData] = useState({
        text: "",
    });

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
        let bookingCost = bookingCosts.filter((obj: { id: string; }) => {
            return obj.id == item._id
        })
        const totalCostMinusBuffer = bookingCost.length ? displayCost(bookingCost[0].cost.totalCostMinusBuffer) : "N/A" 
        const bookingLayout = (<BookingLayout cost={totalCostMinusBuffer} duration={duration} dateRange={dateRange}></BookingLayout>)

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

    let otherHomesComparisonTextWording = null
    let otherHomesIcon = null
    if (props.otherHomesComparison !== null) {
        otherHomesComparisonTextWording = Math.abs((props.otherHomesComparison * 100)).toFixed(0) + '%' + " " + (props.otherHomesComparison > 0 ? "more" : "less")
        otherHomesIcon = props.otherHomesComparison > 0 ? <IoTrendingUp size="34px" className="text-orange"/> : <IoTrendingDown size="34px" className="text-green-500"/>
    }

    let lastMonthComparisonTextWording = null
    let lastMonthComparisonIcon = null
    if (props.lastMonthComparison !== null) {
        lastMonthComparisonTextWording = Math.abs((props.lastMonthComparison * 100)).toFixed(0) + '%' + " " + (props.lastMonthComparison > 0 ? "more" : "less")
        lastMonthComparisonIcon = props.lastMonthComparison > 0 ? <IoTrendingUp size="34px" className="text-orange"/> : <IoTrendingDown size="34px" className="text-green-500"/>
    }
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
                {popupVisible && (
                <Popup onClick={() => setPopupVisible(!popupVisible)}>
                    <QRCode text={popupData.text} />
                </Popup>
                )}
                <div className="md:flex md:justify-between ">
                    <div className="md:w-[42%] my-10 ">
                        <div className="flex justify-between mb-8 md:mb-11">
                            <Tile tileType={TileType.link} 
                                children={<CompactLayout 
                                icon={<IoCreateSharp size="34px"/>}
                                textLine1="Edit Home"
                                textLine2="Details"></CompactLayout>} 
                                clickable={true} onClick={() => router.push(`/homes/${home._id}/edit`)}></Tile>
                            <Tile tileType={TileType.link} 
                                children={<CompactLayout 
                                icon={<IoQrCode size="34px"/>}
                                textLine1="Print"
                                textLine2="QR Code"></CompactLayout>} 
                                clickable={true} onClick={() => {
                                    setPopupVisible(!popupVisible);
                                    setPopupData({
                                        text: `${currentPath}/auth/guest?name=${home.name}`
                                    })
                                }}></Tile>
                        </div>
                        <div className="">
                            <ProgressBar num1={props?.home.energyBuffer} num2={props?.averagePerDay}
                                text1="Average per Day" text2="Buffer" />
                        </div>
                        <div className="mt-10 md:mt-16 mb-8">
                            <div className="flex justify-between">
                                {props.otherHomesComparison !== null && (
                                    <Card cardType={CardType.comparison}>
                                        <CompactLayout 
                                            icon={otherHomesIcon}
                                            textLine1={"vs Other Homes"}
                                            textLine2={otherHomesComparisonTextWording} />
                                    </Card>
                                )}
                                {props.lastMonthComparison !== null && (
                                    <Card cardType={CardType.comparison}>
                                        <CompactLayout 
                                            icon={lastMonthComparisonIcon}
                                            textLine1={"vs Last Month"}
                                            textLine2={lastMonthComparisonTextWording} />
                                    </Card>
                                )}
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

    /**
     * Calculate the average energy per day for a home, using the difference between first and last reading.
     * @param homeId 
     * @returns 
     */
    async function homeEnergyAverage(homeId) {
        //@ts-ignore
        const oldestReading = await Reading.findOne({home: homeId}, {}, { sort: { 'createdAt' : 1 } });
        //@ts-ignore
        const newestReading = await Reading.findOne({home: homeId}, {}, { sort: { 'createdAt' : -1 } });  
        let houseAveragePerDay = 0;   
        if (oldestReading && newestReading)  {
            houseAveragePerDay = averageOfTwoReadings(oldestReading, newestReading)
        }
        return houseAveragePerDay
    }

    /**
     * Uses the day difference to calculate the average usage per day.
     * @param oldestReading
     * @param newestReading 
     * @returns 
     */
    function averageOfTwoReadings(oldestReading, newestReading) {
        const daysDiff = dateDiffInDays(oldestReading.createdAt, newestReading.createdAt) || 1;
        const readingDiff = newestReading.value - oldestReading.value;
        let avg = (readingDiff > 0 ? readingDiff : 0) / daysDiff;
        return avg;
    }

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

        const bookings = await Booking.find({home: h._id, isDeleted: false}).sort({"createdAt": -1}).lean()
        const delegates = h.delegates;       
        const userRole = getRole(session, hNoDelegates);

        // Booking Costs
        const bookingCosts = await Promise.all(bookings.map(async booking => { 
            const b = new Booking(booking);
            const cost = await b.calculateCost(0);
            return {id: booking._id.toString(), cost};
        })).then((y) => {return y;})
    

        // Daily Average    
        let averagePerDay = 0;
        if (readings.length > 0) {
            const firstReading = readings[0];
            const lastReading = readings[readings.length -1];
            let daysElapsed = dateDiffInDays(lastReading.createdAt, firstReading.createdAt) || 1;
            averagePerDay = (Number(lastReading.value) - Number(firstReading.value)) / daysElapsed;
        }

        // Comparison to last month
        const today = new Date()
        const thisMonthReadings = readings.filter(reading => reading.createdAt.getUTCMonth() == today.getUTCMonth() && reading.createdAt.getUTCFullYear() == today.getUTCFullYear())
        // Perform subtraction to get last month 
        let lastMonthDate = subtractMonths(today, 1)
        const lastMonthReadings = readings.filter(reading => reading.createdAt.getUTCMonth() == lastMonthDate.monthUTC && reading.createdAt.getUTCFullYear() == lastMonthDate.yearUTC)
        // Calculate differences
        let lastMonthComparison: number;
        if (lastMonthReadings.length <= 1 || thisMonthReadings.length <= 1) { // If there are 1 or no readings for either month
            lastMonthComparison = null
        } else {
            // Last Month
            let lastMonthValues = lastMonthReadings.map(a => ({value: a.value, createdAt: a.createdAt}))
            let lastMonthAverage = averageOfTwoReadings(lastMonthValues[lastMonthValues.length -1], lastMonthValues[0]);
            // This Month
            let thisMonthValues = thisMonthReadings.map(a => ({value: a.value, createdAt: a.createdAt}))
            let thisMonthAverage = averageOfTwoReadings(thisMonthValues[thisMonthValues.length -1], thisMonthValues[0]);
            // Compare
            lastMonthComparison = percentageDiff(thisMonthAverage, lastMonthAverage);      
        }

        // Comparison to other homes
        let otherHomesPercentageDiff = null;
        // Get Data for this specific home     
        let thisHomeAverage = await homeEnergyAverage(params.id)
        .then((x) => {
            return x;
        })
        if (thisHomeAverage > 0) { // Only allow homes with readings
            //@ts-ignore
            const otherHomes = await Home.find({_id: {$ne: params.id}}).lean();
            if (otherHomes) {
                const results = await Promise.all(otherHomes.map(async otherHome => {      
                    let homeResult = await homeEnergyAverage(otherHome._id.toString()).then((homeAvg) => {
                        let validHome = false
                        if (homeAvg != 0) {
                            validHome = true // Have to manually count the homes as some will have 0 readings, which would invalidate the average.
                        }
                        return {homeId: otherHome._id.toString(), homeAvg, validHome}
                    }).then((x) => {return x;})
                    return homeResult
                })).then((y) => {return y;})

                // Get just the home average figure from each valid home
                const validHomes = results.filter((r) => r.validHome).map(a => a.homeAvg)
                // Calculate the average of the valid home averages
                const otherHomesAverage = validHomes.reduce((a, b) => a + b, 0) / validHomes.length
                otherHomesPercentageDiff = percentageDiff(thisHomeAverage, otherHomesAverage);      
            }      
        } 
        
        if (userRole === Role.Guest) {
            return {
                redirect: {
                    destination: "/auth/guest",
                    permanent: false,
                },
            };
        }

        return {
            props: {
                home: ToSeriableHome(h),
                readings: JSON.stringify(readings),
                bookings: JSON.stringify(bookings),
                delegates: JSON.stringify(delegates),
                userRole: userRole,
                averagePerDay: averagePerDay ?? 0.00,
                bookingCosts: JSON.stringify(bookingCosts),
                otherHomesComparison : otherHomesPercentageDiff,
                lastMonthComparison: lastMonthComparison,
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
