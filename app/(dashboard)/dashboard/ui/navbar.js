"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import NextLink from "next/link"
import logo from "../../../../public/images/pairedLogo.png"
import logo2 from "../../../../public/images/pairedLogo2.png"
// import { siteConfig } from "../../../../config/site"

// import { SignInButton, SignedIn, UserButton, useSession } from "@clerk/nextjs";
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar"
import { Avatar, Button, Input } from "@nextui-org/react"
import { SearchIcon } from "../../../../components/icons"
import { MessageIcon } from "./icons/messages"
import { NotificationIcon } from "./icons/notification"
import { CalendarIcon } from "./icons/calendar"
import { SignOutButton } from "./signout-button"

const menuItems = [
    {
        label: "Home",
        href: "",
    },
    {
        label: "Messages",
        href: "messages",
    },

    {
        label: "People",
        href: "people",
    },
    {
        label: "Settings",
        href: "settings",
    },
    {
        label: "Rooms",
        href: "rooms",
    },
    {
        label: "Roommates",
        href: "roommmates",
    },
]

function Navbar() {
    // const { session } = useSession();
    // const [toggleDropdown, setToggleDropdown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    return (
        <NextUINavbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="flex px-0 h-[80px]"
            maxWidth="full"
            position="sticky"
            isBordered
        >
            <NavbarContent
                className="lg:max-w-2xl max-w-3xl relative"
                justify="start"
            >
                <Input
                    classNames={{
                        base: "min-w-full h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper:
                            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Search for room / roommate..."
                    size="sm"
                    startContent={<SearchIcon size={18} />}
                    type="search"
                />
            </NavbarContent>

            <NavbarContent
                color="primary"
                className="lg:flex hidden"
                justify="end"
            >
                <CalendarIcon />
                <MessageIcon />
                <NotificationIcon />
                <Avatar
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
            </NavbarContent>
            <NavbarContent
                className="basis-1 pl-0 flex w-[100px] gap-4 lg:hidden"
                justify="end"
            >
                <SignOutButton />
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu className="lg:flex flex pt-12 ">
                <div className="mx-4 mt-4 flex flex-col gap-4">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                onClick={() => {
                                    setIsMenuOpen(!isMenuOpen)
                                }}
                                color={
                                    index === 2
                                        ? "primary"
                                        : index === menuItems.length - 1
                                        ? "danger"
                                        : "foreground"
                                }
                                href={`/dashboard/${item.href}`}
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                    {/* <Button>Logout</Button> */}
                    <Avatar
                        size="sm"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    />
                </div>
            </NavbarMenu>
        </NextUINavbar>
    )
}

export default Navbar
