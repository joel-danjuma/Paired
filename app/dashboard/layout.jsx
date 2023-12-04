"use client"
import Nav from "@/components/nav"
import Navbar from "@/components/dashboard/navbar"
import Sidebar from "@/components/dashboard/sidebar"

export default function DashboardLayout({ children }) {
    return (
        <section className="w-full fixed top-0 flex flex-col lg:flex-row">
            <div className="hidden lg:block w-[15%] relative">
                <Sidebar />
            </div>
            <div className="w-full lg:w-[85%] relative h-[100dvh]">
                {/* <Nav /> */}
                {/* <Navbar /> */}
                <main className="w-full h-full overflow-auto glassmorphism p-4">
                    {children}
                </main>
            </div>
        </section>
    )
}
