import { NextResponse } from "next/server"
import { get_users_by_id } from "@/utils/crud"

export async function GET(request, response) {
    try {
        // const id = request.url.slice(request.url.lastIndexOf("/") + 1)
        // // const url = new URL(request.url)
        // // const id = url.searchParams.get("id")
        const { id } = request.json()
        console.log(id)
        // if (!id) {
        //     return NextResponse.json({ message: "Invalid Id" })
        // }
        // console.log(id)
        // const user = await get_users_by_id(id)
        // console.log(user)

        // if (user._id != id)
        //     return NextResponse.json({ message: "User does not exist" })
        // return NextResponse.json(user)
    } catch (error) {
        console.log(error)
    }
}
