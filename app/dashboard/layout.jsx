"use client"
import Sidebar from "./ui/sidebar"
import Navbar from "./ui/navbar"
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs"

export default function DashboardLayout({ children }) {
    return (
        <section>
            {/* <SignedIn> */}
            <div className="w-full h-full fixed top-0">
                <Navbar />
                <div className="flex w-full h-full bg-white ">
                    <Sidebar />
                    {/* <div className="flex w-full h-full">
                        <main>{children}</main>
                    </div> */}
                    <div className="flex flex-col flex-1 w-0 h-full">
                        <main className="relative flex-1 overflow-scroll focus:outline-none h-full">
                            <div className="p-4 min-h-fit">
                                <div className="min-h-fit">{children}</div>
                            </div>
                        </main>
                    </div>
                </div>
                {/* <Sidebar />
                    <main>{children}</main> */}
            </div>
            {/* </SignedIn>
            <SignedOut afters>
                <RedirectToSignIn />
            </SignedOut> */}
        </section>
    )
}
