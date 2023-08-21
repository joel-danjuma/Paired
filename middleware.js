import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
    ignoredRoutes: ["/((?!api|trpc))(_next|.+..+)(.*)", "/", "/api/rooms"],
    // publicRoutes: ["/", "/api/users/64db4626f2d8acbe3643f9c8"],
})

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
