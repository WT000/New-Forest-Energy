import Role from "./roles";
import { HomeInterface } from "../../db/models/Home";
import { Session } from "next-auth";

function getRole(session?: Session, home?: HomeInterface) {
    // Immediately check if Agency (admin)
    if (session?.user?.isAgency) return Role.Agency;
    
    // If no user or home (e.g. because logged out, not sure why there would be no home too) they are a guest
    if (!session || !home ) {
        return Role.Guest;
    }

    // Check if Homeowner (owns the home)
    if (home.owner.toString().includes(session.user.id.toString())) return Role.Homeowner;

    // Check if delegate (id is included within the list)
    if (home.delegates.toString().includes(session.user.id.toString())) return Role.Delegate;

    // Assume user is Guest (other types of user)
    return Role.Guest;
}

export default getRole;