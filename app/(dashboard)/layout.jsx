"use client"
import Sidebar from "./dashboard/ui/sidebar"
import Navbar from "./dashboard/ui/navbar"
// import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs"

export default function DashboardLayout({ children }) {
    return (
        <section className="md:flex md:flex-row w-full h-screen relative">
            {/* <SignedIn> */}
            <aside className="hidden lg:block md:w-fit bg-white">
                <Sidebar />
            </aside>

            <div className="grow overflow-y-auto h-full bg-white flex-col">
                <Navbar />
                <main className="">{children}</main>
            </div>

            {/* </SignedIn>
            <SignedOut afters>
                <RedirectToSignIn />
            </SignedOut> */}
        </section>
    )
}
