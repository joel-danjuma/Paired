import prisma from "@/lib/db"
import {notFound} from 'next/navigation'


const RoommateAd = async (id) => {

  const RoommateAd = await prisma.roommateads.findUnique({where : {
    id
  }})
  if (!RoommateAd) notFound()

  // export async function generateMetadata()

  return (
    <div className="flex-col w-full justify-center gap-4">
      <h1>{`Joel Danjuma`}</h1>
      <h2>{`Im a Corp Member serving in rivers state looking for a roommate in GRA, Port Harcourt`}</h2>
      <p>{RoommateAd.gender}</p>
      <p>{RoommateAd.location}</p>
      <p>{RoommateAd.budget}</p>
      <p>{RoommateAd.pets.toString()}</p>
      <p>{RoommateAd.smoking.toString()}</p>
    </div>
  )
}

export default RoommateAd