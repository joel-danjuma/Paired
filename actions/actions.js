"use server"

import prisma from "@/lib/db"

export const createRoomAd = async (formData) => {
    const title = formData.get("title")
    const description = formData.get("description")
    const propertyType = formData.get("propertyType")
    const rent = parseInt(formData.get("rent"))
    const bedrooms = parseInt(formData.get("bedrooms"))
    const bathrooms = parseInt(formData.get("bathrooms"))
    const location = formData.get("location")
    const pets = formData.get("pets").toLowerCase() === "true"
    const email = formData.get("email")
    const smoking = formData.get("smoking").toLowerCase() === "true"
    const serviced = formData.get("serviced").toLowerCase() === "true"
    const serviceCharge = parseInt(formData.get("serviceCharge"))

    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    })

    //   This is an amazing 3 bed Shared flat available for immediate occupation. Located in a serene and secure part of GRA port harcourt
    //   Facilities include :
    // - Security Post and Serviced Estate
    // - 18hr Power supply
    // - Good access roads to the estate
    // - centrally located
    // - close proximity to churches and entertainment

    const roomAd = await prisma.roomAd.create({
        data: {
            title,
            description,
            propertyType,
            rent,
            bedrooms,
            bathrooms,
            location,
            pets,
            smoking,
            serviced,
            serviceCharge,
            created_by: {
                connect: {
                    id: user.id,
                },
            },
        },
    })

    return roomAd
}

export const createRoommateAd = async (formData) => {
    const title = formData.get("title")
    const description = formData.get("description")
    const age = formData.get("age")
    const gender = formData.get("bathrooms")
    const budget = formData.get("bedrooms")
    const occupation = formData.get("rent")
    const location = formData.get("location")
    const pets = formData.get("pets").toLowerCase() === "true"
    const email = formData.get("email")
    const smoking = formData.get("smoking").toLowerCase() === "true"

    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    })

    const roommateAd = await prisma.roommateAd.create({
        data: {
            title,
            description,
            age,
            gender,
            budget,
            occupation,
            location,
            pets,
            smoking,
            created_by: {
                connect: {
                    id: user.id,
                },
            },
        },
    })
    return roommateAd
}

export const createUser = async (formData) => {
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")
    const image = formData.get("image")

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password,
            image,
        },
    })
}
