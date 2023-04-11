import dbConnect from "../../db/dbcon/dbcon";
import Home from "../../db/models/Home";
import Booking from "../../db/models/Booking";

export default async function handler(req, res) {
    try {
        const startDateTime = req.query.dateTimeStart;
        const endDateTime = req.query.dateTimeEnd;
        const homeId = req.query.homeId;

        if (!startDateTime || !endDateTime || !homeId) return res.status(400).json({success: false});

        // Parse date
        const startDateTimeObj = new Date(Date.parse(startDateTime));
        const endDateTimeObj = new Date(Date.parse(endDateTime));

        // Find home in DB
        await dbConnect();
        const home = await Home.findById(homeId);
        if (!home) return res.status(400).json({success: false});

        // Try to find a booking where dateTimeObj is within its times
        const foundOverlapping = await Booking.findOne({
            home: home._id,
            startDateTime: { $lt: endDateTimeObj },
            endDateTime: { $gt: startDateTimeObj }
        })

        if (!foundOverlapping) return res.json({success: true});
        return res.status(400).json({success: false});
        
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
