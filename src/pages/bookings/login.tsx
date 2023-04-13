import axios from "axios";
import { useRouter } from "next/router";
import GuestLoginForm from "../../components/forms/GuestLoginForm/GuestLoginForm";
import Body, { BodyWithoutNavbar } from "../../components/Body/Body";
import Link from "next/link";

export default function BookingLogin(props) {
    const router = useRouter();
    const {booking} = router.query;

    return (
         <BodyWithoutNavbar
                currentPage="Guest Login"
                welcomeText="Please Sign In">
                <Link href="/auth/signin" className=" text-sm font-light text-black-500 hover:text-black cursor-pointer">Sign in as Owner/Delegate here.</Link>


                <GuestLoginForm
                    onSubmit={async (friendlyId) => {
                        router.push(`/bookings/${friendlyId.friendlyId}`);
                    }}
                    onCancel={() => {
                        router.push("/");
                    }}
                    autoBooking={booking}
                    bookingFinder={async (friendlyId) => {
                        try {
                            const res = await axios.get(`/api/checklogin?friendlyId=${friendlyId}`);

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
        </BodyWithoutNavbar>
    );
}
