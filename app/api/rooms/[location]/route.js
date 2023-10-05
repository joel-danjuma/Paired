import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET({ params }) {
    try {
        const { location } = params
        const response = prisma.roomads.findMany({
            where: {
                location: location,
            },
        })
        return NextResponse.json(response, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error }, { status: 500 })
    }
}
