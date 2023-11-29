import "./globals.css"
import Navbar from "@/components/Navbar"
import Nav from "@/components/nav"
import { Providers } from "./providers"
import { ClerkProvider } from "@clerk/nextjs"

export const metadata = {
    title: "Paired",
    description: "Find the perfect room and roommate for you. ",
}

export default function RootLayout({ children }) {
    return (
        <ClerkProvider
            appearance={{
                layout: {
                    logoPlacement: "inside",
                    socialButtonsVariant: "auto",
                },
            }}
        >
            <html lang="en">
                <body className="cursor-circle">
                    <Providers>
                        <div className="main">
                            <div className="gradient" />
                        </div>
                        {/* <Nav /> */}
                        <Navbar />
                        <main>{children}</main>
                    </Providers>
                </body>
            </html>
        </ClerkProvider>
    )
}
