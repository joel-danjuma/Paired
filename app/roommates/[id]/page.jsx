import prisma from "../../../lib/db"
import { notFound } from "next/navigation"

const RoommateAd = async (id) => {
    const roommateAd = await prisma.roommateAd.findUnique({
        where: {
            id,
        },
    })
    if (!roommateAd) notFound()

    // export async function generateMetadata()

    return (
        <div className="flex-col w-full justify-center gap-4">
            <h1>{roommateAd.title}</h1>
            <h2>{roommateAd.description}</h2>
            <p>{roommateAd.age}</p>
            <p>{roommateAd.occupation}</p>
            <p>{roommateAd.location}</p>
            <p>{roommateAd.budget}</p>
            <p>{roommateAd.gender}</p>
            <p>{roommateAd.pets.toString()}</p>
            <p>{roommateAd.smoking.toString()}</p>
        </div>
    )
}

export default RoommateAd
