import { NextResponse } from "next/server"
import { get_users, get_users_by_id } from "@/utils/crud"

export async function GET() {
    const response = await get_users()
    return NextResponse.json(response)
}
export const get_user_by_id = async (req) => {
    const id = request.url.slice(request.url.lastIndexOf("/") + 1)
    const res = await get_users_by_id(id, {
        headers: {
            "Content-type": "application/json",
            method: "GET",
        },
    })
}
