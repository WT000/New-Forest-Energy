import { getServerSession } from "next-auth";
import { ReadingFormData } from "../../components/forms/ReadingForm/ReadingForm";
import dbConnect from "../../db/dbcon/dbcon";
import Reading from "../../db/models/Reading";
import { authOptions } from "./auth/[...nextauth]";

function checkFormErrors(reading :ReadingFormData, method): boolean {
    if(!reading.image || !reading.readingValue || !reading.homeId || reading.readingValue < 10)return false;

    //Check homeId

    return true;
}


export default async function handler(req, res) {
    try {
        const { method } = req;

        await dbConnect();
        const session = await getServerSession(req, res, authOptions);

        
        switch (method) {
            case "POST":
                const reading = req.body;
                const valid = checkFormErrors(reading, method);

                if (!valid) {
                    return res.status(400).json({ success: false });
                }

                console.log(`Creating reading ${reading.home}`);
                
                const newReading = await Reading.create({
                    home: reading.homeId,
                    user: session?.user?.id ?? null,
                    value: reading.readingValue,
                    image: reading.image,
                    createdAt: new Date(),
                    updatedAt: new Date()
                })

                return res.json({success: true, id: newReading._id});
        }
        
        res.status(401).json({ success: false });
    
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message });
    }
}
