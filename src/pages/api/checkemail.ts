import dbConnect from "../../db/dbcon/dbcon";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import User from "../../db/models/User";
import getRole from "../../lib/utils/getRole";
import Role from "../../lib/utils/roles";

export default async function handler(req, res) {
    try {
        const email = req.query.email;
        if (!email) return res.status(400).json({success: false});

        await dbConnect();
        const session = await getServerSession(req, res, authOptions);

        if (getRole(session) == Role.Agency) {
            // Find email in db
            const user = await User.findOne({email: email})
            if (user) return res.json({success: true});
        }

        res.status(401).json({success: false});
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
