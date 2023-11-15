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
import clsx from "clsx"
import NextLink from "next/link"
import { Link } from "@nextui-org/link"
import { useSession } from "@clerk/nextjs"
import { link as linkStyles } from "@nextui-org/theme"
import { ThemeSwitch } from "@/components/theme-switch"
import { SignInButton, SignOutButton } from "@clerk/nextjs"

const navItems = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
]

const navMenuItems = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
]

const Nav = () => {
    const { session } = useSession()
    return (
        <NextUINavbar>
            {/* Desktop Nav */}
            {session?.user ? (
                <NextUINavbar
                    maxWidth="full"
                    className="px-10"
                    position="sticky"
                >
                    <NavbarContent
                        className="basis-1/5 sm:basis-full"
                        justify="start"
                    >
                        <NavbarBrand as="li" className="gap-3 max-w-fit">
                            <NextLink
                                className="flex justify-start items-center gap-1"
                                href="/"
                            >
                                <p className="orange_gradient text-xl font-bold bg-clip-text text-transparent">
                                    Paired
                                </p>
                            </NextLink>
                        </NavbarBrand>
                    </NavbarContent>
                    <NavbarContent
                        className="basis-1/5 sm:basis-full"
                        justify="center"
                    >
                        <ul className="hidden lg:flex gap-4 justify-start ml-2">
                            {navItems.map((item) => (
                                <NavbarItem key={item.href}>
                                    <NextLink
                                        className={clsx(
                                            linkStyles({ color: "foreground" }),
                                            "data-[active=true]:text-primary data-[active=true]:font-medium orange-gradient text-transparent"
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
                    <NavbarContent justify="end">
                        <SignInButton mode="modal">
                            <button type="button" className="outline_btn">
                                Sign In
                            </button>
                        </SignInButton>
                    </NavbarContent>
                </NextUINavbar>
            ) : (
                <NextUINavbar
                    maxWidth="full"
                    className="px-10"
                    position="sticky"
                >
                    <NavbarContent
                        className="basis-1/5 sm:basis-full"
                        justify="start"
                    >
                        <NavbarBrand as="li" className="gap-3 max-w-fit">
                            <NextLink
                                className="flex justify-start items-center gap-1"
                                href="/"
                            >
                                <p className="orange_gradient text-xl font-bold bg-clip-text text-transparent">
                                    Paired
                                </p>
                            </NextLink>
                        </NavbarBrand>
                    </NavbarContent>
                    <NavbarContent
                        className="basis-1/5 sm:basis-full"
                        justify="center"
                    >
                        <ul className="hidden lg:flex gap-4 justify-start ml-2">
                            {navItems.map((item) => (
                                <NavbarItem key={item.href}>
                                    <NextLink
                                        className={clsx(
                                            linkStyles({ color: "foreground" }),
                                            "data-[active=true]:text-primary data-[active=true]:font-medium orange-gradient text-transparent"
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
                    <NavbarContent justify="end">
                        <SignOutButton mode="modal">
                            <button type="button" className="outline_btn">
                                Sign Out
                            </button>
                        </SignOutButton>
                    </NavbarContent>
                </NextUINavbar>
            )}

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    <ThemeSwitch />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>

            {session?.user ? (
                <NavbarMenu>
                    <div className="mx-4 mt-2 flex flex-col gap-2">
                        {navMenuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    color={
                                        index === 2
                                            ? "primary"
                                            : index === navMenuItems.length - 1
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
            ) : (
                <NavbarMenu>
                    <div className="mx-4 mt-2 flex flex-col gap-2">
                        {navMenuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    color={
                                        index === 2
                                            ? "primary"
                                            : index === navMenuItems.length - 1
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
            )}
        </NextUINavbar>
    )
}

export default Nav
