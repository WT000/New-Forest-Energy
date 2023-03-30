import dbConnect from "../../db/dbcon/dbcon";
import User from "../../db/models/User";

export default async function handler(req, res) {
    try {
        const email = req.query.email;
        if (!email) return res.status(400).json({success: false});

        await dbConnect();

        // Find email in db
        const user = await User.findOne({email: email})
        if (user) return res.json({success: true});
        return res.status(404).json({success: false});
        
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
