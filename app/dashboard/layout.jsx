"use client"
import Navbar from "@/components/dashboard/navbar"
import Sidebar from "@/components/dashboard/sidebar"

export default function DashboardLayout({ children }) {
    return (
        <section className="w-full fixed top-0 flex flex-row">
            <div className="w-1/6 relative flex">
                <Sidebar />
            </div>
            <div className="w-5/6 relative flex">
                <Navbar />
                <main className="relative w-full h-full">
                    <section className="absolute top-16 w-full h-screen overflow-scroll glassmorphism">
                    {children}
                    </section>
                    </main>
            </div>
            
        </section>
    )
}
