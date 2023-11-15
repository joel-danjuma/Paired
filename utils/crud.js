import prisma from "@/lib/db"

export const get_all_users = async () => {
    const users = await prisma.users.findMany()
    return users
}

export const get_all_roommate_ads = async () => {
    const roommates = await prisma.RoommateAd.findMany()
    return roommates
}

export const get_user_by_id = async (id) => {
    const user = await prisma.users.findUnique({
        where: {
            id,
        },
    })
    return user
}

export const get_all_room_ads = async () => {
    const rooms = await prisma.roomads.findMany()
    return rooms
}

// export const get_all_roomads_for_user = async (id) => {
//     const ads = await prisma.roomads.findMany()
// }
