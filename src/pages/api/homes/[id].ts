import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]";
import dbConnect from "../../../db/dbcon/dbcon";
import Home from "../../../db/models/Home";
import getRole from "../../../lib/utils/getRole";
import Role from "../../../lib/utils/roles";

export default async function handler(req, res) {
    try {
        const { id } = req.query
        
        const session = await getServerSession(req, res, authOptions);

        console.log(getRole(session))

        if (getRole(session) != Role.Agency) {
            return res.status(400).json({ success: false });
        }

        if (req.method === "DELETE") {
            await dbConnect();

            const deletedHome = await Home.updateOne({_id: id}, {isDeleted: true})

            return res.json({success: deletedHome.matchedCount > 0})
          }
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}