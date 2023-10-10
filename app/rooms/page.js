// "use client"
// import { useEffect, useState } from "react"
import prisma from "@/lib/db"

const get_room_ads = async () => {
    const response = await prisma.roomads.findMany()
    return response
}

const Rooms = async () => {
    // const [rooms, setRooms] = useState([{}])
    // useEffect(() => {
    //     fetch("/api/rooms")
    //         .then((response) => response.json())
    //         .then( data => setRooms(data))
    // }, [])
    const rooms = await get_room_ads()

    return (
        <div>
            {rooms.map((room, i) => {
                return (
                    <div
                        className="flex flex-col w-full h-screen justify-center items-center "
                        key={i}
                    >
                        <h1>{room.location}</h1>
                        <h1>{room.price}</h1>
                        <h1>{room.pets}</h1>
                        <h1>{room.bedrooms}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Rooms
