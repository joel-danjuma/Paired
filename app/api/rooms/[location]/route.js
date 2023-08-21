import { connectDB } from "@/db/database"
import RoomAds from "@/models/roomAd"
import { NextResponse } from "next/server"

export async function GET(request) {
    try {
        await connectDB()
        const { price } = request.json()
        const response = await RoomAds.find({ price: price })
        return NextResponse.json(response)
    } catch (error) {
        console.log(error)
    }
}
