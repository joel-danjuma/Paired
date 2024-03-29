"use client"
import { useUser, UserButton } from "@clerk/nextjs"
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Button,
} from "@nextui-org/react"
import { Divider } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import { DashboardIcon } from "../ui/icons/dashboard"
import { MessageIcon } from "../ui/icons/messages"
import { UserIcon } from "./icons/users"
import { SettingsIcon } from "../ui/icons/settings"
import { PrimaryLogo } from "../ui/icons/pairedLogo"

const menuItems = [
    { title: "Home", icon: DashboardIcon, href: "/dashboard", position: "top" },
    {
        title: "Messages",
        icon: MessageIcon,
        href: "/dashboard/messages",
        position: "top",
    },
    {
        title: "People",
        icon: UserIcon,
        href: "/dashboard/people",
        position: "top",
    },
    {
        title: "Settings",
        icon: SettingsIcon,
        href: "/dashboard/settings",
        position: "top",
    },
    {
        title: "Rooms",
        icon: UserIcon,
        href: "/dashboard/rooms",
        position: "bottom",
    },
    {
        title: "Roommates",
        icon: UserIcon,
        href: "/dashboard/roommates",
        position: "bottom",
    },
]

const Sidebar = () => {
    // const { user } = useUser()
    const pathName = usePathname()
    return (
        <div className="lg:flex hidden h-[100dvh] ">
            <div className="flex flex-col w-64">
                <div className="flex flex-col flex-grow overflow-y-auto bg-white border-r">
                    <div className="flex flex-col px-8 border-b h-[80px] justify-center items-center ">
                        <Link className="" href="/">
                            {/* <Image
                                src={logo}
                                alt="logo"
                                width={140}
                               
                            ></Image> */}
                            <PrimaryLogo />
                        </Link>
                    </div>
                    <div className="w-full flex flex-col gap-8 px-2">
                        <div className="flex-col flex justify-center items-start space-y-4 py-8">
                            {menuItems
                                .filter((link) => link.position === "top")
                                .map((link, i) => (
                                    <Link
                                        key={i}
                                        href={link.href}
                                        className={clsx(
                                            "flex gap-3 items-center rounded-lg bg-opacity-25 px-4 w-full h-[35px] transition-colors",
                                            {
                                                "bg-[#6359E9]":
                                                    link.href == pathName,
                                            }
                                        )}
                                    >
                                        <link.icon />
                                        {link.title}
                                    </Link>
                                ))}
                        </div>
                        <Divider className="w-full px-4" />
                        <div className="w-full h-[100px] mt-auto ">
                            <ul className="flex-col flex justify-center items-start space-y-4">
                                {menuItems
                                    .filter(
                                        (link) => link.position === "bottom"
                                    )
                                    .map((link, i) => (
                                        <Link
                                            key={i}
                                            href={link.href}
                                            className={clsx(
                                                "flex gap-3 items-center rounded-lg bg-opacity-25 px-4 w-full h-[35px] transition-colors",
                                                {
                                                    "bg-[#6359E9]":
                                                        link.href == pathName,
                                                }
                                            )}
                                        >
                                            <link.icon />
                                            {link.title}
                                        </Link>
                                    ))}
                            </ul>
                        </div>
                        <div className="px-3  flex justify-center items-center">
                            <Card className="w-full bg-gray-100">
                                <CardHeader className="flex justify-center items-center">
                                    <div className="-mt-20 rounded-full bg-gray-100 max-w-sm max-h-sm">
                                        .
                                    </div>
                                    <p className="text-center font-semibold">
                                        Welcome to Paired
                                    </p>
                                </CardHeader>
                                <CardBody>
                                    <p className="text-center text-gray-500">
                                        Search for new rooms and roommates by
                                        location. Connect and find a perfect
                                        match with Paired
                                    </p>
                                </CardBody>
                                <CardFooter className="w-full">
                                    <Button className="text-center w-full rounded-md bg-white/50">
                                        Get started
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

// ${
//     listItem[0].toLowerCase() +
//     listItem.slice(1)
// } /
