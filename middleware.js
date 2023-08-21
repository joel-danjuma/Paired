import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
    // ignoredRoutes: ["/((?!api|trpc))(_next|.+..+)(.*)", "/", "/api/users"],
    publicRoutes: ["/", "/api/rooms", "/api/users"],
})

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
