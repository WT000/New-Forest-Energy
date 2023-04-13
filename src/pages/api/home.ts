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

        let home;
        let homedb;
        let valid;
        let role;
        let owner;
        
        switch (method) {
            case "POST":
                if (getRole(session) != Role.Agency) {
                    return res.status(400).json({ success: false });
                }

                home = req.body;
                valid = checkFormErrors(home, method);

                if (!valid) {
                    return res.status(400).json({ success: false });
                }

                console.log(`Creating home ${home.name}`);
                
                owner = await User.findOne({email: home.owner});
                const newHome = await Home.create({
                    name: home.name,
                    owner: owner._id,
                    numBeds: home.numBeds,
                    energyInstructions: home.energyInstructions,
                    energyTariff: home.energyTariff,
                    energyBuffer: home.energyBuffer,
                    image: home.image
                })

                return res.json({success: true, id: newHome._id});

            case "PUT":
                home = req.body;
                valid = checkFormErrors(home, method);

                if (!valid) {
                    return res.status(400).json({ success: false });
                }

                homedb = await Home.findOne({_id: home._id});
                role = getRole(session, homedb);
                
                if (role != Role.Agency && role != Role.Homeowner) {
                    return res.status(401).json({ success: false });
                }

                console.log(`Editing home ${homedb.name}`);

                owner = await User.findOne({email: home.owner});
                const editHome = await Home.findByIdAndUpdate(homedb._id, {
                    name: home.name,
                    owner: role == Role.Agency ? owner._id : homedb.owner,
                    numBeds: home.numBeds,
                    energyInstructions: home.energyInstructions,
                    energyTariff: home.energyTariff,
                    energyBuffer: home.energyBuffer,
                    image: home.image
                })
                if (editHome) return res.json({success: true, id: homedb._id});
                break;

            case "DELETE":
                if (getRole(session) != Role.Agency) {
                    return res.status(400).json({ success: false });
                }
            
                const homeId = req.query.id;
                homedb = await Home.findOne({_id: homeId});
                
                if (!homedb) {
                    return res.status(404).json({success: false});
                }

                console.log(`Deleting home ${homedb.name}`);

                const homeDelete = await Home.findByIdAndUpdate(homedb._id, {
                    isDeleted: true
                });
                if (homeDelete) return res.json({success: true});
                break;
        }
        
        res.status(401).json({ success: false });
    
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message });
    }
}
