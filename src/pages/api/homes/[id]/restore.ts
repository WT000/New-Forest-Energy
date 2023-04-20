import { getServerSession } from "../../../../hooks/getServerSession";
import { authOptions } from "../../auth/[...nextauth]";
import dbConnect from "../../../../db/dbcon/dbcon";
import Home from "../../../../db/models/Home";
import getRole from "../../../../lib/utils/getRole";
import Role from "../../../../lib/utils/roles";

export default async function handler(req, res) {
    try {
        const { id } = req.query
        
        const session = await getServerSession(req, res, authOptions);

        console.log(getRole(session))

        if (getRole(session) != Role.Agency) {
            return res.status(400).json({ success: false });
        }

        if (req.method === "PUT") {
            await dbConnect();

            const deletedHome = await Home.findOneAndUpdate({_id: id}, {isDeleted: { $ne: true }})

            return res.json({home: deletedHome})
          }
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}