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
import { Button } from "@nextui-org/react"

const menuItems = [
    // {
    //     label: "Rooms",
    //     href: "/ads/rooms",
    // },
    // {
    //     label: "Roommates",
    //     href: "/ads/roommates",
    // },

    {
        label: "Create Room Ad",
        href: "/createAd/rooms",
    },
    {
        label: "Create Roommate Ad",
        href: "/createAd/roommates",
    },
    {
        label: "Messages",
        href: "/messages",
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
            className="glassmorphism px-0"
            maxWidth="full"
            position="sticky"
            isBordered
        >
            <NavbarContent
                className="basis-1/5 sm:basis-full relative"
                justify="start"
            >
                <NavbarBrand as="li">
                    <NextLink
                        className="flex justify-start items-center"
                        href="/"
                    >
                        <Image
                            src={logo}
                            alt="logo"
                            width={40}
                            className="lg:hidden flex"
                        ></Image>
                        <Image
                            src={logo2}
                            alt="logo"
                            width={80}
                            className="lg:flex hidden"
                        ></Image>
                    </NextLink>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent
                className="basis-1 pl-4  flex lg:hidden"
                justify="end"
            >
                <NavbarMenuToggle />
            </NavbarContent>
            <NavbarContent
                color="primary"
                className="basis-1 pl-4  lg:flex hidden"
                justify="end"
            >
                <Button>Logout</Button>
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
                    <Button>Logout</Button>
                </div>
            </NavbarMenu>
        </NextUINavbar>
    )
}

export default Navbar
