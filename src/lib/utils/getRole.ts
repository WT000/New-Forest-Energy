import Role from "./roles";
import { HomeInterface } from "@/db/models/Home";
import { UserInterface } from "@/db/models/User";

// Takes in a Home and User, returns an enum based on the type
function getRole(home: HomeInterface, user: UserInterface) {
    // Check if Agency (admin)
    if (user.isAgency) return Role.Agency;

    // Check if Homeowner (owns the home)
    if (home.owner.toString() == user._id.toString()) return Role.Homeowner;

    // Check if Delegate (worker of the home)
    home.delegates.forEach(delegate => {
        if (delegate.toString() == user._id.toString()) return Role.Delegate;
    });

    // Assume user is Guest (other types of user)
    return Role.Guest;
}

export default getRole;