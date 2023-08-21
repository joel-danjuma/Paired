import { NextResponse } from "next/server"
import { connectDB } from "@/db/database"
import User from "@/models/user"

export async function GET() {
    await connectDB()
    const response = await User.find()
    return NextResponse.json(response)
}
export async function POST(request) {
    const { email, username, image } = await request.json()
    await connectDB()
    const new_user = await User.create({ email, username, image })
    console.log("User created succesfully")
    return NextResponse.json(new_user, { status: 201 })
}
export async function PUT(request) {
    const { email, username, image } = await request.json()
    await connectDB()
    const updated_user = await User.updateOne(
        { email: email },
        { email, username, image }
    )
    console.log("Updated user details")
    return NextResponse.json(
        { message: "Updated User Details" },
        { status: 200 }
    )
}
