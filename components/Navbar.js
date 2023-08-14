"use client"
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/images/profile_2.svg"
import { FiMenu } from "react-icons/fi"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"

const Navbar = () => {
    const isUserLoggedIn = true

    const [providers, setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)
    // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders()

            setProviders(response)
        }
        setUpProviders()
    }, [])

    return (
        <nav className="flex justify-between w-full mb-8 pt-3 px-5">
            <Link href="/">
                <p className="orange_gradient text-xl font-bold">Paired</p>
            </Link>

            {/* Desktop Navigation */}
            <div className="lg:flex hidden w-auto">
                {isUserLoggedIn ? (
                    <div className="gap-3 md:gap-4 flex">
                        <Link href="/create-post" className="orange_btn">
                            Create Post
                        </Link>
                        <button
                            type="button"
                            onClick={() => {
                                setIsUserLoggedIn(false)
                                // signOut()
                            }}
                            className="outline_btn"
                        >
                            Sign Out
                        </button>
                        <Link href="/profile">
                            <Image
                                src={logo}
                                className="rounded-full"
                                alt="profile"
                                width={37}
                                height={37}
                            />
                        </Link>
                    </div>
                ) : (
                    <div className="flex gap-3 md:gap-4">
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={signIn(provider.id)}
                                    className="orange_btn"
                                >
                                    Sign In
                                </button>
                            ))}

                        <Link href="/about" className="outline_btn ">
                            About Us
                        </Link>
                        <button
                            type="button"
                            onClick={() => {
                                setIsUserLoggedIn(true)
                                // signIn()
                            }}
                            className="orange_btn"
                        >
                            Sign In
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex relative">
                {
                    <FiMenu
                        className="w-7 h-7 "
                        onClick={() => {
                            setToggleDropdown((prev) => !prev)
                        }}
                    />
                }
                {isUserLoggedIn ? (
                    <div>
                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link
                                    href="/profile"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    My Profile
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setToggleDropdown(false)
                                        setIsUserLoggedIn(false)
                                        // signOut()
                                    }}
                                    className="mt-5 w-full black_btn"
                                >
                                    Sign Out
                                </button>
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
                                {providers &&
                                    Object.values(providers).map((provider) => (
                                        <button
                                            type="button"
                                            key={provider.name}
                                            onClick={() => {
                                                signIn(provider.id)
                                            }}
                                            className="orange_btn"
                                        >
                                            Sign In
                                        </button>
                                    ))}
                                <div className="dropdown_link">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsUserLoggedIn(true)
                                            setToggleDropdown(false)
                                            // signIn()
                                        }}
                                        className="orange_btn"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* <button
                            type="button"
                            onClick={signIn}
                            className="orange_btn"
                        >
                            Sign In
                        </button> */}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
