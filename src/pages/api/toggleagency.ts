import dbConnect from "../../db/dbcon/dbcon";
import { getServerSession } from "../../hooks/getServerSession";
import { authOptions } from "./auth/[...nextauth]";
import User from "../../db/models/User";

export default async function handler(req, res) {
    try {
        // await dbConnect() - This would be done if using models
        await dbConnect();
        const session = await getServerSession(req, res, authOptions);

        if (session) {
            await User.findOneAndUpdate({ _id: session.user.id }, [{ $set: { isAgency: { $not: "$isAgency" } } }]);
            // session.user.isAgency = !session.user.isAgency;
            res.json({ success: true });
        } else {
            res.status(403).json({ error: "You're not signed in!" });
        }
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
