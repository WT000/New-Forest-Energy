import dbConnect from "../../db/dbcon/dbcon";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import User from "../../db/models/User";
import Home from "../../db/models/Home";
import getRole from "../../lib/utils/getRole";
import Role from "../../lib/utils/roles";
import { countDecimal } from "../../components/forms/HomeForm/HomeForm";

// Form error function, so database connections are not needed to check for simple errors
function checkFormErrors(home, method): boolean {
    // Check name
    if (!home.name || typeof home.name !== "string" || home.name.length < 4) return false;

    // Check owner
    if (
        !home.owner ||
        typeof home.owner !== "string" ||
        !home.owner.match(
            "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
        )
    )
        return false;

    // Check numBeds
    if (!home.numBeds || typeof home.numBeds !== "number" || home.numBeds <= 0 || !Number.isInteger(home.numBeds)) return false;

    // Check energyInstructions
    if (!home.energyInstructions || typeof home.energyInstructions !== "string" || home.energyInstructions.length == 0) return false;

    // Check energyBuffer
    if (!home.energyBuffer || typeof home.energyBuffer !== "number" || !countDecimal(home.energyBuffer)) return false;

    // check energyTariff
    if (!home.energyTariff || typeof home.energyTariff !== "number" || !countDecimal(home.energyTariff)) return false;

    if (method == "PUT") {
        if (!home._id) return false;
    }

    return true;
}

export default async function handler(req, res) {
    try {
        const { method } = req;

        await dbConnect();
        const session = await getServerSession(req, res, authOptions);

        if (getRole(session) == Role.Agency) {
            const home = req.body;
            const valid = checkFormErrors(home, method);

            if (!valid) {
                return res.status(400).json({ success: false });
            }

            switch (method) {
                case "POST":
                    console.log(`Creating home ${home.name}`);
                    
                    const owner = await User.findOne({email: home.owner});

                    const newHome = await Home.create({
                        name: home.name,
                        owner: owner._id,
                        numBeds: home.numBeds,
                        energyInstructions: home.energyInstructions,
                        energyTariff: home.energyTariff,
                        energyBuffer: home.energyBuffer
                    })

                    console.log(`Home ${home.name} created: ${newHome._id}`)
                    return res.json({success: true, id: newHome._id})

                case "PUT":
                    console.log(`Editing home ${home.name}`);
                    break;

                case "DELETE":
                    console.log(`Deleting home ${home.name}`);
                    break;
            }
        }

        res.status(401).json({ success: false });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message });
    }
}
