import User from "@/models/user"
import RoomAds from "@/models/roomAd"
import RoommateAds from "@/models/roommateAd"
import { connectDB } from "@/db/database"
import { NextResponse } from "next/server"

export const get_user_by_id = async (id) => {
    await connectDB()
    const res = await User.findById(id)
    return res
}

export const get_all_users = async () => {
    await connectDB()
    const res = await User.findOne()
    return res
}

export const get_all_rooms = async () => {
    await connectDB()
    const res = await RoomAds.find()
    if (res == null) {
        console.log("No Room Ads")
    }
    return res
}

export const create_room_ad = async (request) => {
    try {
        await connectDB()
        const {
            location,
            price,
            bedrooms,
            smoking,
            pets,
            // available_from,
            // created_at,
        } = request.json()
        const newAd = await RoomAds.create({
            location,
            price,
            bedrooms,
            smoking,
            pets,
        })
        return newAd
    } catch (error) {
        console.log(error)
    }
}
