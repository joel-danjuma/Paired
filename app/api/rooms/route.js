import { connectDB } from "@/db/database"
import RoomAds from "@/models/roomAd"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        await connectDB()
        const response = await RoomAds.find()
        return NextResponse.json(response)
    } catch (error) {
        console.log(error)
        return NextResponse({ message: error }, { status: 500 })
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id")
        await connectDB()
        await RoomAds.findByIdAndDelete(id)
        return NextResponse.json({ message: "Ad deleted" }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse({ message: error }, { status: 500 })
    }
}

export async function POST(request) {
    try {
        await connectDB()
        const { location, price, bedrooms, smoking, pets } =
            await request.json()
        // if (!location || !price || !bedrooms || !smoking || !pets) {
        //     console.log("Missing Parameter")
        //     return NextResponse.json(
        //         { message: "Missing Parameter" },
        //         { status: 401 }
        //     )
        // }
        const newAd = await RoomAds.create({
            location,
            price,
            bedrooms,
            smoking,
            pets,
        })
        console.log("Created new Room Ad")
        return NextResponse.json(newAd, { status: 200 })
    } catch (error) {
        console.log(error)
    }
}
