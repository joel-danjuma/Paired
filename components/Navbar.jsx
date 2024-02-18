"use client"
import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "../config/site"
import { ThemeSwitch } from "./theme-switch"
import logo from "../public/images/pairedLogo.png"
import logo2 from "../public/images/pairedLogo2.png"

const Navbar = () => {
    // const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    return (
        <NextUINavbar
            maxWidth="full"
            position="sticky"
            isBordered
            // onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent>
                <NavbarBrand as="li">
                    <Link className="flex justify-start items-center" href="/">
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
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {siteConfig.navItems.map((item) => (
                    <NavbarItem key={item.href}>
                        <Link color="foreground" href={item.href}>
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    <ThemeSwitch />
                </NavbarItem>
                <NavbarMenuToggle />
                {/* 
                <NavbarItem className="hidden md:flex lg:flex lg:flex-row">
                    {session?.user ? (
                        <div className="flex flex-row gap-4 items-center">
                            <Button
                                className="dark:text-black text-white dark:bg-white bg-black w-full"
                                type="button"
                            >
                                <Link href="/dashboard">Dashboard</Link>
                            </Button>
                            <SignOutButton>
                                <Button type="button" className="w-full ">
                                    Sign Out
                                </Button>
                            </SignOutButton>
                            <UserButton />
                        </div>
                    ) : (
                        <SignInButton mode="modal">
                            <Button
                                className="text-white bg-black"
                                type="button"
                            >
                                Sign In
                            </Button>
                        </SignInButton>
                    )}
                </NavbarItem> */}
            </NavbarContent>

            <NavbarContent
                className="flex sm:hidden md:hidden basis-1 pl-4"
                justify="end"
            >
                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                {siteConfig.navMenuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link className="w-full" href={item.href} size="lg">
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </NextUINavbar>
    )
}

export default Navbar
