import dbConnect from "../../db/dbcon/dbcon";
import Home from "../../db/models/Home";
import Booking from "../../db/models/Booking";

export default async function handler(req, res) {
    try {
        const dateTime = req.query.dateTime;
        const homeId = req.query.homeId;
        if (!dateTime || !homeId) return res.status(400).json({success: false});

        // Parse date
        const dateTimeObj = Date.parse(dateTime);

        // Find home in DB
        await dbConnect();
        const home = await Home.findById(homeId);
        if (!home) return res.status(400).json({success: false});

        // Check if any booking dates for the home conflict with this date
        const foundBooking = await Booking.findOne({
            home: home._id,
            startDateTime: { $gt: dateTimeObj },
            endDateTime: { $lt: dateTimeObj }
        })

        // If a booking was not found, the date is available
        if (!foundBooking) return res.json({success: true});
        return res.status(400).json({success: false});
        
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
