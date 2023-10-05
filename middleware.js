import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
    // ignoredRoutes: ["/((?!api|trpc))(_next|.+..+)(.*)", "/", "/api/users"],
    publicRoutes: [
        "/",
        "/about",
        "/api/rooms",
        "/api/users",
        "/api/roommates",
        "/api/users/64e341303e339de8e24d1914",
    ],
})

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
