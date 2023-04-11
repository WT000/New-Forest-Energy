import axios from "axios";
import { useRouter } from "next/router";
import GuestLoginForm from "../../components/forms/GuestLoginForm/GuestLoginForm";

export default function BookingLogin(props) {
    const router = useRouter();

    return (
        <div>
            <GuestLoginForm
                onSubmit={async (friendlyId) => {
                    router.push(`/bookings/${friendlyId.friendlyId}`);
                }}
                onCancel={() => {
                    router.push("/");
                }}
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
        </div>
    );
}
