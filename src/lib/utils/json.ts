export function ToSeriableHome(home){
    return (
        {
            ...home._doc, 
            _id: home._id.toString(),
            owner: home.owner.toString(),
            delegates: home.delegates.map(x => x._id.toString()),
            createdAt: JSON.stringify(home.createdAt),
            updatedAt: JSON.stringify(home.updatedAt)
        }
    )
}

export function ToSeriableBooking(booking){

    console.log("abc", booking)

    return (
        {
            ...booking._doc,
            _id: booking._id.toString()?? null,
            home: booking.home?.toString() ?? null,
            startDateTime: booking.startDateTime?.toString()?? null,
            endDateTime: booking.endDateTime?.toString() ?? null,
        }
    )
}