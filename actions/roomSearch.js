"use server"

import prisma from "@/lib/db"

export const roomSearch = async (formData) => {
    location = formData.get("location")
    propertyType = formData.get("propertyType")
    price = formData.get("price")
    try {
        const rooms = await prisma.roomAd.findMany({
            where: {
                location,
                propertyType,
                price,
            },
        })
        return rooms
    } catch (error) {
        console.log(error)
    }
}
