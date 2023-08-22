import { connectDB } from "@/db/database"
import RoomAds from "@/models/roomAd"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
    try {
        const { location } = params
        await connectDB()
        const response = await RoomAds.find({ location: location })
        return NextResponse.json(response, { status: 200 })
    } catch (error) {
        console.log(error)
    }
}
