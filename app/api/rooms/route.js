// import { connectDB } from "@/db/database"
// import RoomAds from "@/models/roomAd"
import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
    try {
        const response = await prisma.roomads.findMany()
        return NextResponse.json(response, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse({ message: error }, { status: 500 })
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id")
        await prisma.roomads.delete({
            where: {
                id: id,
            },
        })
        return NextResponse.json({ message: "Ad deleted" }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse({ message: error }, { status: 500 })
    }
}

export async function POST(request) {
    try {
        const { location, price, bedrooms, smoking, pets } =
            await request.json()
        if (!location || !price || !bedrooms || !smoking || !pets) {
            console.log("Missing Parameter")
            return NextResponse.json(
                { message: "Missing Parameter" },
                { status: 401 }
            )
        }
        const newAd = await prisma.RoomAds.create({
            data: {
                location: location,
                price: price,
                bedrooms: bedrooms,
                smoking: smoking,
                pets: pets,
            },
        })
        console.log("Created new Room Ad")
        return NextResponse.json(newAd, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error }, { status: 500 })
    }
}
