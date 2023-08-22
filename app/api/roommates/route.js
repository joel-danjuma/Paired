import { connectDB } from "@/db/database"
import RoommateAds from "@/models/roommateAd"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        await connectDB()
        const response = await RoommateAds.find()
        return NextResponse.json(response, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error }, { status: 400 })
    }
}

export async function POST(request) {
    try {
        await connectDB()
        const { gender, budget, pets, smoking } = await request.json()
        // if (!location || !price || !bedrooms || !smoking || !pets) {
        //     console.log("Missing Parameter")
        //     return NextResponse.json(
        //         { message: "Missing Parameter" },
        //         { status: 401 }
        //     )
        // }
        const newAd = await RoommateAds.create({
            gender,
            budget,
            pets,
            smoking,
        })
        console.log("Created new Roommate Ad")
        return NextResponse.json(newAd, { status: 201 })
    } catch (error) {
        console.log(error)
    }
}
