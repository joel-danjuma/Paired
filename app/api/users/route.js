import { NextResponse } from "next/server"
import { get_users } from "@/utils/crud"

export async function GET() {
    const response = await get_users()
    return NextResponse.json(response)
}
