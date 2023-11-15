"use server"
// import { useState, useEffect } from "react"
import { get_all_room_ads } from "@/utils/crud"
// import { Card } from "@nextui-org/react"

const Rooms = async () => {
    const rooms = await get_all_room_ads()

    return (
        <>
            {rooms.map((room, i) => {
                return (
                    <div key={i} className="w-full h-full p-4 flex-col">
                        <h2>{room.price}</h2>
                        <h2>{room.id}</h2>
                        <h2>{room.bedrooms}</h2>
                        <h2>{room.location}</h2>
                        <h2> {room.pets.toString()}</h2>
                        
                    </div>
                )
            })}
        </>
    )
}

export default Rooms
