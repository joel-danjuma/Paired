"use server"

import prisma from "@/lib/db"

export const roomSearch = async (formData) => {
    const location = formData.get("location").toString()
    const propertyType = formData.get("propertyType")
    const price = formData.get("price")
    try {
        // const rooms = await prisma.roomAd.findMany({
        //     where: {
        //         location,
        //         propertyType,
        //         price,
        //     },
        // })
        // return rooms
        console.log({ location, price, propertyType })
    } catch (error) {
        console.log(error)
    }
}
