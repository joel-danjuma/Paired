import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
    // ignoredRoutes: ["/((?!api|trpc))(_next|.+..+)(.*)", "/", "/api/users"],
    publicRoutes: [
        "/",
        "/about",
        "/rooms",
        "/roommates",
        "/api/rooms",
        "/api/users",
        "/api/roommates",
        "/api/send",
        "/api/users/64e341303e339de8e24d1914",
        "/rooms",
        "/dashboard",
    ],
})

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}

// import { NextResponse } from "next/server"

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//     return NextResponse.redirect(new URL("/home", request.url))
// }

// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: "/about/:path*",
// }
