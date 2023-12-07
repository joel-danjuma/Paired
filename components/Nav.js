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
import { Link } from "@nextui-org/link"
import { Input } from "@nextui-org/input"

import { link as linkStyles } from "@nextui-org/theme"

import { siteConfig } from "@/config/site"
import NextLink from "next/link"
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
        <NextUINavbar maxWidth="full" position="sticky">
            <NavbarContent
                className="basis-1/5 sm:basis-full relative"
                justify="start"
            >
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink
                        className="flex justify-start items-center gap-1"
                        href="/"
                    >
                        {/* <Logo /> */}
                        <p className="font-bold text-inherit">Paired</p>
                    </NextLink>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent
                className="basis-1/5 sm:basis-full absolute top-0 right-0 left-0"
                justify="center"
            >
                <ul className="hidden lg:flex gap-4 items-center ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
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
                className="flex md:hidden sm:hidden basis-1 pl-4"
                justify="end"
            >
                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-2 flex flex-col gap-2">
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
