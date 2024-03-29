import dbConnect from "../../db/dbcon/dbcon";
import { getServerSession } from "../../hooks/getServerSession";
import { authOptions } from "./auth/[...nextauth]";
import User from "../../db/models/User";
import Home from "../../db/models/Home";
import getRole from "../../lib/utils/getRole";
import Role from "../../lib/utils/roles";
import Booking from "../../db/models/Booking";
import { genID } from "../../lib/utils/seed";

// Form error function, so database connections are not needed to check for simple errors
function checkFormErrors(booking, method): boolean {
    // if fields exist
    if (!booking.surname || typeof booking.surname !== "string" || booking.surname.match(/^ *$/) !== null) return false;
    if (!booking.startDateTime || typeof booking.startDateTime !== "string") return false;
    if (!booking.endDateTime || typeof booking.endDateTime !== "string") return false;
    if (!booking.homeId || typeof booking.homeId !== "string") return false;

    try {
        const startTest = Date.parse(booking.startDateTime);
        const endTest = Date.parse(booking.endDateTime);

        if (!startTest || !endTest || Number.isNaN(startTest) || Number.isNaN(endTest)) return false;
    } catch (e) {
        return false;
    }

    if (method == "PUT" || method == "DELETE") {
        if (!booking._id || typeof booking._id !== "string") return false;
    }

    return true;
}

export default async function handler(req, res) {
    try {
        const { method } = req;

        await dbConnect();
        const session = await getServerSession(req, res, authOptions);

        let booking;
        let bookingdb;
        let home;
        let valid;
        let role;
        let friendlyId;

        let startDateTime;
        let endDateTime;
        let foundOverlapping;

        switch (method) {
            case "POST":
                booking = req.body;
                valid = checkFormErrors(booking, method);

                if (!valid) {
                    return res.status(400).json({ success: false });
                }

                home = await Home.findById(booking.homeId);
                role = getRole(session, home);

                if (role !== Role.Agency) {
                    return res.status(401).json({ success: false });
                }

                // Ensure dates are valid, in case of direct connection to route
                startDateTime = new Date(Date.parse(booking.startDateTime));
                endDateTime = new Date(Date.parse(booking.endDateTime));

                foundOverlapping = await Booking.findOne({
                    home: home._id,
                    startDateTime: { $lt: endDateTime },
                    endDateTime: { $gt: startDateTime },
                });
                if (foundOverlapping) return res.status(400).json({ success: false });

                console.log(`Creating booking for ${home.name}`);

                // Friendly ID generation
                friendlyId = genID(booking.homeId, home.name, booking.surname);

                const newBooking = await Booking.create({
                    surname: booking.surname,
                    friendlyId: friendlyId,
                    home: home._id,
                    startDateTime: Date.parse(booking.startDateTime),
                    endDateTime: Date.parse(booking.endDateTime),
                });

                return res.json({ success: true, friendlyId: newBooking.friendlyId });

            case "PUT":
                booking = req.body;
                valid = checkFormErrors(booking, method);

                if (!valid) {
                    return res.status(400).json({ success: false });
                }

                bookingdb = await Booking.findOne({ _id: booking._id }).populate("home", "", Home);
                role = getRole(session, bookingdb?.home);

                if (!bookingdb || (role != Role.Agency && role != Role.Homeowner)) {
                    return res.status(401).json({ success: false });
                }

                // Ensure dates are valid, in case of direct connection to route
                startDateTime = new Date(Date.parse(booking.startDateTime));
                endDateTime = new Date(Date.parse(booking.endDateTime));

                foundOverlapping = await Booking.findOne({
                    home: bookingdb.home._id,
                    _id: { $ne: bookingdb._id },
                    startDateTime: { $lt: endDateTime },
                    endDateTime: { $gt: startDateTime },
                });
                if (foundOverlapping) return res.status(400).json({ success: false });

                console.log(`Editing booking ${bookingdb.friendlyId}`);

                const editBooking = await Booking.findByIdAndUpdate(bookingdb._id, {
                    surname: booking.surname,
                    startDateTime: Date.parse(booking.startDateTime),
                    endDateTime: Date.parse(booking.endDateTime),
                });
                if (editBooking) return res.json({ success: true, friendlyId: bookingdb.friendlyId });
                break;

            case "DELETE":
                const bookingId = req.query.id;

                bookingdb = await Booking.findOne({ _id: bookingId }).populate("home", "", Home);
                role = getRole(session, bookingdb?.home);

                if (!bookingdb || (role != Role.Agency && role != Role.Homeowner)) {
                    return res.status(401).json({ success: false });
                }

                console.log(`Deleting booking ${bookingdb.friendlyId}`);

                const bookingDelete = await Booking.findByIdAndUpdate(bookingdb._id, {isDeleted: true});
                if (bookingDelete) return res.json({ success: true });
                break;
        }

        res.status(401).json({ success: false });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message });
    }
}
