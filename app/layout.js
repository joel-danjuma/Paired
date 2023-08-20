import "./globals.css"
import Navbar from "@/components/Navbar"
import { ClerkProvider } from "@clerk/nextjs"
// import Provider from "@/components/Provider"

export const metadata = {
    title: "Paired",
    description: "Find the perfect room and roommate for you. ",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="cursor-circle">
                <ClerkProvider>
                    <div className="main">
                        <div className="gradient" />
                    </div>
                    <Navbar />
                    <main>{children}</main>
                </ClerkProvider>
            </body>
        </html>
    )
}
