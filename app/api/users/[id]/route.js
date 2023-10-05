import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function PUT(request, { params }) {
    try {
        const { id } = params
        const { newEmail, newUsername, newImage } = await request.json()

        await prisma.users.update({
            where: {
                id: id,
            },
            data: {
                email: newEmail,
                username: newUsername,
                image: newImage,
            },
        })
        console.log("Updated User details")
        return NextResponse.json(
            { message: "Updated User Details" },
            { status: 201 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error }, { status: 400 })
    }
}

export async function DELETE({ params }) {
    try {
        const { email } = params
        await prisma.users.delete({
            where: {
                email: email,
            },
        })
        console.log("Deleted User")
        return NextResponse.json({ message: "Deleted User" }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error }, { status: 500 })
    }
}
