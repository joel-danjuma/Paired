"use client"
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar"
import { Button } from "@nextui-org/button"
import { Kbd } from "@nextui-org/kbd"
import Link from "next/link"
import { Input } from "@nextui-org/input"

import { link as linkStyles } from "@nextui-org/theme"

import { siteConfig } from "@/config/site"

import clsx from "clsx"

import { ThemeSwitch } from "@/components/theme-switch"
import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
    HeartFilledIcon,
    SearchIcon,
} from "@/components/icons"

// import { Logo } from "@/components/icons"
import {
    useSession,
    SignInButton,
    SignOutButton,
    UserButton,
    RedirectToUserProfile,
} from "@clerk/clerk-react"

const Nav = () => {
    const { session } = useSession()
    return (
        <NextUINavbar maxWidth="full" position="sticky" isBordered>
            <NavbarContent
                className="basis-1/5 sm:basis-full relative"
                justify="start"
            >
                <NavbarItem className="gap-3 max-w-fit">
                    <Link
                        className="flex justify-start items-center gap-1"
                        href="/"
                    >
                        {/* Paired */}
                        <p className="font-bold text-inherit">Paired</p>
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent
                className="basis-1/5 sm:basis-full absolute top-0 right-0 left-0"
                justify="center"
            >
                <ul className="hidden lg:flex gap-4 items-center ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <Link
                                className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </Link>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    <ThemeSwitch />
                </NavbarItem>

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
                </NavbarItem>
            </NavbarContent>

            <NavbarContent
                className="flex sm:hidden md:hidden basis-1 pl-4"
                justify="end"
            >
                <ThemeSwitch />
            </NavbarContent>
            <NavbarMenuToggle />

            <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {/* Add session for mobile once navnbar menu toggle button problem is resolved. mobile users shoudld also see their user profile button beside the theme switch button */}
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2
                                        ? "primary"
                                        : index ===
                                          siteConfig.navMenuItems.length - 1
                                        ? "danger"
                                        : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    )
}

export default Nav
