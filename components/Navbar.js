"use client"
import Link from "next/link"
import { dark } from "@clerk/themes"
import { FiMenu } from "react-icons/fi"
import { useState, useEffect } from "react"
import {
    useSession,
    SignInButton,
    SignOutButton,
    UserButton,
    RedirectToUserProfile,
} from "@clerk/clerk-react"
import { SignedIn } from "@clerk/nextjs"

const Navbar = () => {
    const { session } = useSession()
    const [toggleDropdown, setToggleDropdown] = useState(false)

    return (
        <nav className="flex w-full h-20">
            {/* Desktop Navigation */}
            <div className="lg:flex hidden w-full h-full flex-row justify-between items-center font-medium relative p-4">
                <Link href="/">
                    <p className="orange_gradient text-xl font-bold">Paired</p>
                </Link>
                {session?.user ? (
                    <div className="gap-2 flex">
                        <Link href="/create-post" className="orange_btn">
                            Create Ad
                        </Link>
                        <UserButton afterSignOutUrl="/" />
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <Link href="/about" className="outline_btn ">
                            About Us
                        </Link>
                        <SignInButton
                        // appearance={{
                        //     baseTheme: dark,
                        //     layout: {
                        //         logoPlacement: "inside",
                        //         socialButtonsVariant: "blockButton",
                        //     },
                        //     variables: {
                        //         colorPrimary: "orange",
                        //         colorText: "white",
                        //     },
                        // }}
                        >
                            <button type="button" className="outline_btn">
                                Sign In
                            </button>
                        </SignInButton>
                    </div>
                )}
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden w-full h-14 ">
                {
                    <div className="w-full h-full flex-row flex justify-between p-4 z-20">
                        <Link href="/" onClick={() => setToggleDropdown(false)}>
                            <p className="orange_gradient text-md font-bold">
                                Paired
                            </p>
                        </Link>
                        <FiMenu
                            className="w-7 h-7 "
                            onClick={() => {
                                setToggleDropdown((prev) => !prev)
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
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setToggleDropdown(false)
                                        }}
                                        className="w-full black_btn"
                                    >
                                        Sign Out
                                    </button>
                                </SignOutButton>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link
                                    href="/about"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    About Us
                                </Link>

                                <div className="dropdown_link">
                                    <SignInButton>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setToggleDropdown(false)
                                            }}
                                            className="outline_btn"
                                        >
                                            Sign In
                                        </button>
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
