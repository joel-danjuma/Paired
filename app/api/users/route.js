import prisma from "../../../lib/db"
import { NextResponse } from "next/server"
// import { get_all_users } from "@/utils/crud"

// export async function GET() {
//     try {
//         const response = await get_all_users()
//         return NextResponse.json(response, { status: 200 })
//     } catch (error) {
//         console.log(error)
//         return NextResponse({ message: error }, { status: 500 })
//     }
// }

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id")
        await prisma.users.delete({
            where: {
                id: id,
            },
        })
        return NextResponse.json({ message: "User deleted" }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse({ message: error }, { status: 500 })
    }
}

export async function POST(request) {
    try {
        const { email, name, password, image } = await request.json()
        const new_user = await prisma.user.create({
            data: {
                name,
                email,
                password,
                image,
            },
        })
        console.log("User created succesfully")
        return NextResponse.json(new_user, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ mesage: error }, { status: 500 })
    }
}

export async function PUT(request) {
    try {
        const { email, username, image } = await request.json()

        await prisma.users.update({
            where: {
                email: email,
            },
            data: {
                email: email,
                username: username,
                image: image,
            },
        })
        console.log("Updated user details")
        return NextResponse.json(
            { message: "Updated User Details" },
            { status: 201 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json({ mesage: error }, { status: 500 })
    }
}
