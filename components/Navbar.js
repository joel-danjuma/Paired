"use client"
import Link from "next/link"
import Image from "next/image"
// import logo from "@/public/images/profile_2.svg"
import { FiMenu } from "react-icons/fi"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()

    const [providers, setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    useEffect(() => {
        ;(async () => {
            const res = await getProviders()
            console.log(res)
            setProviders(res)
        })()
    }, [])

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
                            Create Post
                        </Link>
                        <button
                            type="button"
                            onClick={() => {
                                signOut()
                            }}
                            className="outline_btn"
                        >
                            Sign Out
                        </button>
                        <Link href="/profile">
                            <Image
                                src={session?.user.image}
                                className="rounded-full"
                                alt="profile"
                                width={37}
                                height={37}
                            />
                        </Link>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <Link href="/about" className="outline_btn ">
                            About Us
                        </Link>
                        {/* {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => {
                                        signIn(provider.id)
                                    }}
                                    className="black_btn"
                                >
                                    Sign in
                                </button>
                            ))} */}
                        <button
                            type="button"
                            onClick={() => {
                                signIn()
                            }}
                            className="outline_btn"
                        >
                            Sign In
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden w-full h-14 ">
                {
                    <div className="w-full h-full flex-row flex justify-between p-4 ">
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
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    My Profile
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setToggleDropdown(false)
                                        // setIsUserLoggedIn(false)
                                        signOut()
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

                                <div className="dropdown_link">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            // setIsUserLoggedIn(true)
                                            setToggleDropdown(false)
                                            signIn()
                                        }}
                                        className="outline_btn"
                                    >
                                        Sign In
                                    </button>
                                    {/* {providers &&
                                        Object.values(providers).map(
                                            (provider) => (
                                                <button
                                                    type="button"
                                                    key={provider.name}
                                                    onClick={() => {
                                                        signIn(provider.id)
                                                    }}
                                                    className="black_btn"
                                                >
                                                    Sign in
                                                </button>
                                            )
                                        )} */}
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
