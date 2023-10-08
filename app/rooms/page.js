"use client"
import { useEffect, useState } from "react"

const Rooms = () => {
    const [rooms, setRooms] = useState([{}])
    const [displayData, setDisplayData] = useState(false)
    useEffect(() => {
        fetch("/api/rooms")
            .then((response) => response.json())
            .then((data) => {
                setRooms(data)
            })
    }, [])

    return (
        <div className="flex w-full h-screen justify-center items-center flex-col ">
            <button
                className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded focus:outline-none"
                onClick={() => setDisplayData(!displayData)}
            >
                {displayData ? "Hide Data" : "Display Data"}
            </button>
            {typeof rooms === "undefined" ? (
                <div>
                    <p>Loading ....</p>
                </div>
            ) : (
                displayData &&
                rooms.map((room, i) => {
                    return (
                        <div
                            className="w-full h-full flex justify-center items-center text-2xl"
                            key={i}
                        >
                            <ul>
                                <li>{room.bedrooms}</li>
                                <li>{room.location}</li>
                                <li>{room.pets}</li>
                                <li>{room.price}</li>
                            </ul>
                        </div>
                    )
                })
            )}
        </div>
    )
}

export default Rooms
