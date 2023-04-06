export function ToSeriableHome(home){

    return (
        {
            ...home?._doc ? home._doc : home, 
            _id: (home?._id && home._id.toString()) ?? null,
            owner: (home?.owner && home?.owner?.toString()) ?? null,
            delegates: (home?.delegates && home?.delegates.map(x => x._id.toString())) ?? null,
            createdAt: (home?.createdAt && JSON.stringify(home.createdAt)) ?? null,
            updatedAt: (home?.updatedAt && JSON.stringify(home.updatedAt)) ?? null
        }
    )
}

export function ToSeriableBooking(booking){

    return (
        {
            ...booking._doc,
            _id: booking._id.toString(),
            home: booking?.home && ToSeriableHome(booking.home),
            startDateTime: booking.startDateTime?.toString(),
            endDateTime: booking.endDateTime?.toString(),
        }
    )
}