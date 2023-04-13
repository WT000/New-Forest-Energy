import dbConnect from "../../db/dbcon/dbcon";
import Reading from "../../db/models/Reading";

export default async function handler(req, res) {
    try {
        const homeId = req.query.homeId;
        const readingVal = req.query.readingVal;

        if (!homeId || !readingVal) return res.status(400).json({success: false});

        

        await dbConnect();

        // Find email in db
        const latestReading = await Reading.findOne({home: homeId}).sort({"createdAt": -1}).limit(1);

        console.log(latestReading)

        if (!latestReading || latestReading.value <= readingVal) return res.json({success: true});

        return res.status(404).json({success: false});
        
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}