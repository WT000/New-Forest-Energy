import dbConnect from "../../db/dbcon/dbcon";
import Booking from "../../db/models/Booking";

export default async function handler(req, res) {
    try {
        const friendlyId = req.query.friendlyId;
        if (!friendlyId) return res.status(400).json({success: false});

        await dbConnect();

        // Find email in db
        const booking = await Booking.findOne({friendlyId: friendlyId})
        if (booking) return res.json({success: true});
        return res.status(404).json({success: false});
        
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
