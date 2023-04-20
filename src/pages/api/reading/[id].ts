import { getServerSession } from "next-auth";
import { ReadingFormData } from "../../../components/forms/ReadingForm/ReadingForm";
import dbConnect from "../../../db/dbcon/dbcon";
import Reading from "../../../db/models/Reading";
import { authOptions } from "../auth/[...nextauth]";
import getRole from "../../../lib/utils/getRole";
import Home from "../../../db/models/Home";
import Role from "../../../lib/utils/roles";

function checkFormErrors(reading :ReadingFormData, method): boolean {
    if(!reading.image || !reading.readingValue || !reading.homeId || reading.readingValue < 0)return false;

    //Check homeId

    return true;
}


export default async function handler(req, res) {
    try {
        const { method } = req;
        const { id } = req.query

        await dbConnect();
        const session = await getServerSession(req, res, authOptions);

        switch (method) {
            case "DELETE":
                const reading = await Reading.findById(id);

                const home = await Home.findById(reading.home);

                const homeRole = getRole(session, home)

                if (!home || (homeRole != Role.Agency && homeRole != Role.Homeowner)) {
                    return res.status(400).json({ success: false });
                }

                console.log(`Deleting reading ${reading._id}`);

                const readingDelete = await Reading.findByIdAndDelete(reading._id);
                if (readingDelete) return res.json({ success: true });
                break;
        }
        
        res.status(401).json({ success: false });
    
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message });
    }
}
