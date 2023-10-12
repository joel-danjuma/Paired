"use client"
// import { useEffect, useState } from "react"
import prisma from "@/lib/db"
import { Card, CardBody, Image, Button, Progress } from "@nextui-org/react"
import Sidebar from "@/components/sidebar"

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

    // const rooms = await get_room_ads()
    const rooms = []

    return (
        <div className="w-full h-screen flex">
            <Sidebar />
            {rooms.map((room, i) => {
                return (
                    <Card
                        key={i}
                        isBlurred
                        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
                        shadow="sm"
                    >
                        <CardBody>
                            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                                <div className="relative col-span-6 md:col-span-4">
                                    <Image
                                        alt="Album cover"
                                        className="object-cover"
                                        height={200}
                                        shadow="md"
                                        src="/public/images/profile_2.svg"
                                        width="100%"
                                    />
                                </div>

                                <div className="flex flex-col col-span-6 md:col-span-8">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col gap-0">
                                            <h3 className="font-semibold text-foreground/90">
                                                Daily Mix
                                            </h3>
                                            <p className="text-small text-foreground/80">
                                                12 Tracks
                                            </p>
                                            <h1 className="text-large font-medium mt-2">
                                                Frontend Radio
                                            </h1>
                                        </div>
                                        <Button
                                            isIconOnly
                                            className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                                            radius="full"
                                            variant="light"
                                            onPress={() => setLiked((v) => !v)}
                                        >
                                            ❤️
                                        </Button>
                                    </div>

                                    <div className="flex flex-col mt-3 gap-1">
                                        <Progress
                                            aria-label="Music progress"
                                            classNames={{
                                                indicator:
                                                    "bg-default-800 dark:bg-white",
                                                track: "bg-default-500/30",
                                            }}
                                            color="default"
                                            size="sm"
                                            value={33}
                                        />
                                        <div className="flex justify-between">
                                            <p className="text-small">1:23</p>
                                            <p className="text-small text-foreground/50">
                                                4:32
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                )
            })}
        </div>
    )
}

export default Rooms
