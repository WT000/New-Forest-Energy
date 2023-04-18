import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]";
import { IoHome, IoLogOut } from "react-icons/io5";
import Body from "../../../components/Body/Body";
import getRole from "../../../lib/utils/getRole";
import Role from "../../../lib/utils/roles";
import BookingForm, { BookingFormData, EditBookingFormData } from "../../../components/forms/BookingForm/BookingForm";
import mongoose from "mongoose";
import Home from "../../../db/models/Home";
import Booking from "../../../db/models/Booking";
import { ToSeriable } from "../../../lib/utils/homes";
import dbConnect from "../../../db/dbcon/dbcon";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import axios from "axios";
import { ToSeriableHome } from "../../../lib/utils/json";

export default function NewBooking(props) {
    const { userSession, home, booking } = props;

    const navItems = [
        {
            icon: <IoHome />,
            text: "All Homes",
            path: "/homes",
            activePage: true,
        },
        {
            icon: <IoLogOut />,
            text: "Sign Out",
            path: "/api/auth/signout",
        },
    ];

    const stats = [
        {
            stat: props?.stats?.homes,
            text: "Homes",
        },
        {
            stat: props?.stats?.bookingsLast3Months,
            text: "Bookings (Last 3 Months)",
        },
        {
            stat: props?.stats?.bookingsLast12Months,
            text: "Bookings (Last 12 Months)",
        },
    ];

    const router = useRouter();

    const { isLoading, mutate } = useMutation(
        (editBooking: EditBookingFormData) => {
            return axios.put("/api/booking", editBooking);
        },
        {
            onSuccess: (data) => {
                router.push(`/bookings/${data?.data?.friendlyId}`);
            },
        }
    );

    const { isLoading: isLoadingDelete, mutate: mutateDelete } = useMutation(
        () => {
            return axios.delete(`/api/booking?id=${JSON.parse(booking)._id}`);
        },
        {
            onSuccess: () => {
                router.push(`/homes/${JSON.parse(booking).home._id}`);
            },
        }
    );

    return (
        <>
            <Body
                statItems={stats}
                menuItems={navItems}
                welcomeText={`Welcome back, ${userSession?.user?.name}`}
                welcomeImage={userSession?.user?.image}
                currentPage="New Booking"
            >
                <BookingForm
                    onSubmit={async (booking) => {
                        mutate(booking);
                    }}
                    onCancel={() => {
                        router.push("/");
                    }}
                    isLoading={isLoading}
                    home={home}
                    edit={{
                        onDelete: () => mutateDelete(home.id),
                        onDeleteLoading: isLoadingDelete,
                        editBooking: JSON.parse(booking),
                    }}
                    bookingFinder={async (dateTimeStart, dateTimeEnd) => {
                        try {
                            if (!dateTimeStart || !dateTimeEnd) return false;

                            // Attempt to find a booking with this start or end date for the home
                            const res = await axios.get(`/api/checkbooking?dateTimeStart=${dateTimeStart}&dateTimeEnd=${dateTimeEnd}&homeId=${home._id}&bookingId=${JSON.parse(booking)._id}`);

                            if (res.status == 200) {
                                return true;
                            }
                        } catch (e) {
                            console.log(e);
                            return false;
                        }

                        return false;
                    }}
                />
            </Body>
        </>
    );
}

export async function getServerSideProps(context) {
    await dbConnect();

    const session = await getServerSession(context.req, context.res, authOptions);

    // Get the booking via ID
    const booking = await Booking.findOne({friendlyId: context.params.friendlyId}).populate("home", "", Home);

    // @ts-ignore
    const role = getRole(session, booking?.home);
    
    if ((role !== Role.Agency) || !booking || !booking.home) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    const isAgency = session?.user?.isAgency == true;
    const userId = session?.user?.id ?? "";

    try {
        const filter = isAgency
            ? {}
            : { $or: [{ delegates: new mongoose.Types.ObjectId(userId) }, { owner: new mongoose.Types.ObjectId(userId) }] };

        const homesTask = Home.find(filter);
        const homeCountTask = Home.count(filter);
        const homes = await homesTask;

        const homeIds = homes.map((x) => x._id);

        const bookingsLast3MonthsTask = Booking.count({
            home: { $in: homeIds },
            startDateTime: {
                $gte: new Date(new Date().getTime() - 90 * 24 * 60 * 60 * 1000),
            },
        });

        const bookingsLast12MonthsTask = Booking.count({
            home: { $in: homeIds },
            startDateTime: {
                $gte: new Date(new Date().getTime() - 365 * 24 * 60 * 60 * 1000),
            },
        });

        return {
            props: {
                stats: {
                    homes: (await homeCountTask).toString(),
                    bookingsLast3Months: (await bookingsLast3MonthsTask).toString(),
                    bookingsLast12Months: (await bookingsLast12MonthsTask).toString(),
                },
                home: ToSeriableHome(booking.home),
                booking: JSON.stringify(booking),
                homes: homes.map((x) => ToSeriable(x)),
                userSession: session,
            },
        };
    } catch (e) {
        console.log(e.message);

        return {
            notFound: true,
        };
    }
}
