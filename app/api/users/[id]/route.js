import { NextResponse } from "next/server"
import { connectDB } from "@/db/database"
// import { clerkClient } from "@clerk/nextjs/server"
import User from "@/models/user"

export async function PUT(request, { params }) {
    try {
        const { id } = params
        const { newEmail, newUsername, newImage } = await request.json()
        await connectDB()
        await User.findByIdAndUpdate(id, {
            newEmail,
            newUsername,
            newImage,
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
