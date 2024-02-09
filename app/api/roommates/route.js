import prisma from "../../../lib/db"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const response = await prisma.roommateads.findMany()
        return NextResponse.json(response, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error }, { status: 400 })
    }
}

export async function POST(request) {
    try {
        const { gender, budget, pets, smoking } = await request.json()
        const newAd = await prisma.roommateads.create({
            data: {
                gender: gender,
                budget: budget,
                pets: pets,
                smoking: smoking,
            },
        })
        console.log("Created new Roommate Ad")
        return NextResponse.json(newAd, { status: 201 })
    } catch (error) {
        console.log(error)
    }
}
