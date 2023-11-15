"use server"
import { get_all_roommate_ads } from "@/utils/crud"

export const generateMetadata = () => {
    return {
        title: "Find Your Perfect Roommate with Paired || Roommates",
        description:
            "Paired makes roommmate search easy. Discover the best roommates and create harmonious living spaces. Start your roommate search today!",
    }
}

const Roommates = async () => {
    const roommates = await get_all_roommate_ads()

    return (
        <>
            {roommates.map((roommate, i) => {
                return (
                    <div key={i} className="w-full h-full p-4 flex-col">
                        <h2>{roommate.id}</h2>
                        <h2>{roommate.gender}</h2>
                        <h2>{roommate.budget}</h2>
                        <h2>{roommate.pets.toString()}</h2>
                        <h2>{roommate.smoking.toString()}</h2>
                    </div>
                )
            })}
        </>
    )
}

export default Roommates
