export function ToSeriable(home, ownerRep?){
    return (
        {
            ...home._doc, 
            _id: home._id.toString(),
            owner: ownerRep? home.owner[ownerRep].toString() : home.owner.toString(),
            delegates: home.delegates.map(x => x._id.toString()),
            createdAt: JSON.stringify(home.createdAt),
            updatedAt: JSON.stringify(home.updatedAt)
        }
    )
}