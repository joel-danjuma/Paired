import "./globals.css"
import { Providers } from "./providers"
import { siteConfig } from "../config/site"
import { NextUIProvider } from "@nextui-org/system"

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
        <html lang="en" className="light">
            <body>
                <NextUIProvider>
                    <div className="main">
                        <div className="gradient" />
                    </div>
                    {/* <Nav /> */}
                    {/* <Navbar /> */}
                    <main>{children}</main>
                </NextUIProvider>
                {/* <Providers> */}

                {/* </Providers> */}
            </body>
        </html>
    )
}

// className="fixed w-full top-12"
