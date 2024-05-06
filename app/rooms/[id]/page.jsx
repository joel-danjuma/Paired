import prisma from "../../../lib/db"
import { notFound } from "next/navigation"

const RoomAd = async (id) => {
    const idString = typeof id === "object" && id.params ? id.params.id : id
    const roomAd = await prisma.roomAd.findUnique({
        where: {
            id: idString,
        },
    })
    if (!roomAd) notFound()

    // export async function generateMetadata()

    return (
        <div className="flex-col w-full justify-center gap-4">
            <h1>{roomAd.title}</h1>
            <h2>{roomAd.description}</h2>
            <p>{roomAd.propertyType}</p>
            <p>{roomAd.rent}</p>
            <p>{roomAd.bedrooms}</p>
            <p>{roomAd.bathrooms}</p>
            <p>{roomAd.location}</p>
            <p>{roomAd.pets.toString()}</p>
            <p>{roomAd.smoking.toString()}</p>
            <p>{roomAd.serviced}</p>
            <p>{roomAd.serviceCharge}</p>
        </div>
    )
}

export default RoomAd
