import { NextResponse } from "next/server"
import { connectDB } from "@/db/database"
// import { clerkClient } from "@clerk/nextjs/server"
import User from "@/models/user"

export async function GET() {
    await connectDB()
    const response = await User.find()
    return NextResponse.json(response)
}
export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id")
        await connectDB()
        await User.findByIdAndDelete(id)
        // await clerkClient.users.deleteUser(id)
        return NextResponse.json({ message: "User deleted" }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse({ message: error }, { status: 500 })
    }
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
