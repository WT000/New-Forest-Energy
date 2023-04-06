import { useRouter } from "next/router"
import { useState } from "react"

export default function BookingLogin(props){

    const router = useRouter()

    const [bookingId, setBookingId] = useState("")

    function goToBooking(){
        //If ID is valid
        router.push(`/bookings/${bookingId}`)
    }

    return (
        <div>
            <input type="text" maxLength={7} name="simple_booking_id" placeholder="7 Character Booking ID" value={bookingId} onChange={e => setBookingId(e.target.value)}/>
            <button onClick={e => goToBooking()}>
                Go to my booking
            </button>
        </div>
    )
}