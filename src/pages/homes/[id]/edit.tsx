import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]";
import { IoHome, IoLogOut } from "react-icons/io5";
import Body from "../../../components/Body/Body";
import getRole from "../../../lib/utils/getRole";
import Role from "../../../lib/utils/roles";
import HomeForm, { EditHomeFormData, HomeFormData } from "../../../components/forms/HomeForm/HomeForm";
import mongoose from "mongoose";
import Home from "../../../db/models/Home";
import Booking from "../../../db/models/Booking";
import { ToSeriable } from "../../../lib/utils/homes";
import dbConnect from "../../../db/dbcon/dbcon";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import axios from "axios";
import User from "../../../db/models/User";

export default function EditHome(props) {
    const { userSession, homeJSON, role } = props;

    // Parse a bit of JSON here, as delegate lists need their emails extracted
    const home = JSON.parse(homeJSON);
    home.owner = home?.owner?.email ?? "";
    home.delegates = home.delegates.map(obj => obj.email).join(", ");

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
        (editHome: EditHomeFormData) => {
            return axios.put("/api/home", editHome);
        },
        {
            onSuccess: (data) => {
                router.push(`/homes/${data?.data?.id}`);
            },
        }
    );

    const { isLoading: isLoadingDelete, mutate: mutateDelete } = useMutation(
        () => {
            return axios.delete(`/api/home?id=${home._id}`);
        },
        {
            onSuccess: () => {
                router.push(`/`);
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
                currentPage="Edit Home"
            >
                <HomeForm
                    onSubmit={async (home) => {
                        mutate(home);
                    }}
                    onCancel={() => {
                        router.push("/");
                    }}
                    isLoading={isLoading}
                    edit={{
                        onDelete: () => mutateDelete(home.id),
                        onDeleteLoading: isLoadingDelete,
                        editHome: home,
                        role: role,
                    }}
                    userFinder={async (email) => {
                        try {
                            // Attempt to find email
                            const res = await axios.get(`/api/checkemail?email=${email}`);

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

    // Find the home to be edited
    const home = await Home.findOne({_id: context.params.id}).populate("owner", "email", User).populate("delegates", "-_id email", User);
    const role = getRole(session, home);

    if (role != Role.Agency && role != Role.Homeowner) {
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
                homes: homes.map((x) => ToSeriable(x)),
                homeJSON: JSON.stringify(home),
                userSession: session,
                role: role,
            },
        };
    } catch (e) {
        console.log(e.message);

        return {
            notFound: true,
        };
    }
}
