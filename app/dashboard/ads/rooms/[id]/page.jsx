import prisma from "@/lib/db"
import {notFound} from 'next/navigation'

const RoomAd = async (id) => {
  const RoomAd = await prisma.roomads.findUnique({where : {
    id
  }})
  if (!RoomAd) notFound()

  // export async function generateMetadata()

  return (
    <div className="flex-col w-full justify-center gap-4">
      <h1>{`3 Bedroom Flat For Rent in GRA Phase 2`}</h1>
      <h2>{`Looking for corp members or young proffesionals to rent this beautiful and brand new listing in GRA, Fitted with ensuite rooms, modern furniture and design at a great price. common room and more.`}</h2>
      <p>{RoomAd.price}</p>
      <p>{RoomAd.bedrooms}</p>
      <p>{RoomAd.location}</p>
      <p>{RoomAd.pets.toString()}</p>
      <p>{RoomAd.smoking.toString()}</p>
    </div>)
}

export default RoomAd