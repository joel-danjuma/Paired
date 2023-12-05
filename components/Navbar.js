"use client"
import Link from "next/link"
// import { dark } from "@clerk/themes"
import { FiMenu } from "react-icons/fi"
import { useState, useEffect } from "react"
// import ThemeChanger from "./darkSwitch"
// import Button from "./Button"
import { Button } from "@nextui-org/react"
import {
    useSession,
    SignInButton,
    SignOutButton,
    UserButton,
    RedirectToUserProfile,
} from "@clerk/clerk-react"

const Navbar = () => {
    const { session } = useSession()
    const [toggleDropdown, setToggleDropdown] = useState(false)

    return (
        <nav className="flex w-full h-12 mx-auto container p-4">
            {/* Desktop Navigation */}
            <div className="lg:flex hidden w-full h-full flex-row justify-between items-center font-medium relative p-4">
                <Link href="/">
                    <p className="orange_gradient text-xl font-bold bg-clip-text text-transparent">
                        Paired
                    </p>
                </Link>
                {session?.user ? (
                    <div className="gap-2 flex">
                        <Link href="/create-post">Create Ad</Link>
                        <UserButton afterSignOutUrl="/" />
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <Button variant="light" type="button">
                            <Link href="/about">About Us</Link>
                        </Button>
                        <SignInButton mode="modal">
                            <Button
                                className="text-white bg-black"
                                type="button"
                            >
                                Sign In
                            </Button>
                        </SignInButton>
                    </div>
                )}
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden w-full h-14 ">
                {
                    <div className="w-full h-full flex-row flex justify-between p-4 ">
                        <Link href="/" onClick={() => setToggleDropdown(false)}>
                            <p className="orange_gradient bg-clip-text text-transparent text-md font-bold">
                                Paired
                            </p>
                        </Link>
                        <FiMenu
                            className="w-7 h-7 "
                            onClick={() => {
                                // setToggleDropdown((prev) => !prev)
                                setToggleDropdown(!toggleDropdown)
                            }}
                        />
                    </div>
                }
                {session?.user ? (
                    <div>
                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link
                                    href="/profile"
                                    className="black_btn w-full"
                                    onClick={() => {
                                        setToggleDropdown(false)
                                        return <RedirectToUserProfile />
                                    }}
                                >
                                    My Profile
                                </Link>

                                <SignOutButton>
                                    <Button
                                        type="button"
                                        onClick={() => {
                                            setToggleDropdown(false)
                                        }}
                                        className="w-full "
                                    >
                                        Sign Out
                                    </Button>
                                </SignOutButton>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        {toggleDropdown && (
                            <div className="dropdown">
                                {/* <Link
                                    href="/about"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    About Us
                                </Link> */}

                                <div className="dropdown_link">
                                    <SignInButton mode="modal">
                                        <Button
                                            type="Button"
                                            onClick={() => {
                                                setToggleDropdown(false)
                                            }}
                                            // className="outline_btn"
                                        >
                                            Log In
                                        </Button>
                                    </SignInButton>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
