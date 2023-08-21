import { NextResponse } from "next/server"
import { get_all_rooms, create_room_ad } from "@/utils/crud"

export async function GET() {
    const response = await get_all_rooms()
    return NextResponse.json(response)
}

export async function POST(request) {
    try {
        const response = await create_room_ad(request)
        return NextResponse.json(response)
    } catch (error) {
        console.log(error)
    }
}
