"use client"
import Sidebar from "./ui/sidebar"
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs"

export default function DashboardLayout({ children }) {
    return (
        <section className="w-full h-full fixed top-16 glassmorphism">
            <SignedIn>
                <div className="flex h-screen overflow-hidden bg-white">
                    <Sidebar />
                    <div className="flex flex-col flex-1 w-0 overflow-hidden">
                        <main className="relative flex-1 overflow-y-auto focus:outline-none">
                            <div className="p-1">
                                <div className="py-4">
                                    <div className="h-screen border border-gray-200 border-dashed rounded-lg">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </SignedIn>
            <SignedOut afters>
                <RedirectToSignIn />
            </SignedOut>
        </section>
    )
}
