"use client"
import Link from "next/link"
import Image from "next/image"
import NextLink from "next/link"
import { Kbd } from "@nextui-org/kbd"
// import { FiMenu } from "react-icons/fi";
import { Input } from "@nextui-org/input"
import { siteConfig } from "@/config/site"

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
import { SearchIcon } from "@/components/icons"

function Navbar() {
    // const { session } = useSession();
    // const [toggleDropdown, setToggleDropdown] = useState(false);
    const searchInput = (
        <Input
            aria-label="Search"
            classNames={{
                inputWrapper: "bg-[#FFFFFF]",
                input: "text-sm",
            }}
            endContent={
                <Kbd className="hidden lg:inline-block" keys={["command"]}>
                    K
                </Kbd>
            }
            labelPlacement="outside"
            placeholder="Search Fresh Produce and Spices"
            startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
        />
    )

    return (
        <NextUINavbar
            className="glassmorphism px-4  "
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
                        {/* <Image
                            src={logo}
                            alt="logo"
                            width={12}
                            height={12}
                            className="lg:hidden flex"
                        ></Image> */}
                        <p className="font-bold text-green-500 text-2xlflex ">
                            Paired
                        </p>
                    </NextLink>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="center">
                <NavbarItem className="hidden w-[620px] lg:flex">
                    {searchInput}
                </NavbarItem>
            </NavbarContent>

            {/* <NavbarContent className="lg:hidden flex basis-1 " justify="start">
                <p className="font-bold text-green-500 text-xl">Paired</p>
            </NavbarContent> */}

            <NavbarContent className="basis-1 pl-4  flex" justify="end">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu className="lg:flex flex pt-12 ">
                <NavbarMenuItem className="lg:hidden flex">
                    {searchInput}
                </NavbarMenuItem>

                <div className="mx-4 mt-4 flex flex-col gap-4">
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

export default Navbar
