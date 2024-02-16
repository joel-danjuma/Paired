import "./globals.css"
// import Navbar from "@/components/Navbar"
import Nav from "../components/nav"
import { Providers } from "./providers"
// import { ClerkProvider } from "@clerk/nextjs"
import { siteConfig } from "../config/site"

export const metadata = {
    metadataBase: new URL("http://localhost:3000/"),
    alternates: {
        canonical: "/",
        languages: {
            "en-US": "/en-US",
        },
    },
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
    },
    openGraph: {
        title: siteConfig.name,
        description: siteConfig.description,
        type: "website",
        siteName: "Paired",
        url: `${process.env.URL}`,
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}

export default function RootLayout({ children }) {
    return (
        // <ClerkProvider
        //     appearance={{
        //         layout: {
        //             logoPlacement: "inside",
        //             socialButtonsVariant: "auto",
        //         },
        //     }}
        // >
        <html lang="en" className="light">
            <body>
                <Providers>
                    {/* <div className="main">
                            <div className="gradient" />
                        </div> */}
                    <Nav />
                    {/* <Navbar /> */}
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
        // </ClerkProvider>
    )
}

// className="fixed w-full top-12"
