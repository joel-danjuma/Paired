"use client"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"
import { Divider } from "@nextui-org/react"

const menuItems = [
    {
        title: "Menu",
        list: ["Rooms", "Roommates", "Messages"],
    },
    {
        title: "Settings",
        list: ["User", "Help"],
    },
]

const Sidebar = () => {
    return (
        <Card className="absolute top-0 w-full h-screen flex flex-col glassmorphism justify-space-between items-start rounded-none px-4">
            <CardHeader className="flexflex-col p-0 pt-4 pb-2 items-start">
                <h1 className="text-4xl font-bold text-start">Dashboard</h1>
            </CardHeader>
            <Divider />
            <CardBody className="p-0 pt-4 pb-4">
                {menuItems.map((item, i) => {
                    return (
                        <div key={i}>
                            <div className="pt-4 pb-4">
                                <h2 className="font-bold text-2xl">
                                    {item.title}
                                </h2>
                            </div>

                            {item.list.map((listItem, i) => {
                                return (
                                    <div key={i} className="space-y-4">
                                        <ul>
                                            <li>
                                                <a
                                                    href={`/dashboard/${listItem.toLowerCase()}`}
                                                >
                                                    {listItem}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </CardBody>
            <CardFooter className="p-0 pb-4">
                <button>LogOut</button>
            </CardFooter>
        </Card>
    )
}

export default Sidebar
