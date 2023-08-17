import { NextResponse } from "next/server"
import { get_users_by_id } from "@/utils/crud"

export async function GET(request) {
    const id = request.url.slice(request.url.lastIndexOf("/") + 1)
    const res = await get_users_by_id(id)
    if (res.id != id) return NextResponse.json({ message: "Invalid Id" })
    return NextResponse.json(res)
}
