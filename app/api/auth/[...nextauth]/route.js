import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import Auth0Provider from "next-auth/providers/auth0"

// import dotenv from "dotenv"
import User from "@/models/user"
import { connectDB } from "@/utils/database"

// dotenv.config()

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: process.env.AUTH0_ISSUER,
        }),
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email,
            })
            session.user.id = sessionUser._id.toString()

            return session
        },
        async signIn({ profile }) {
            try {
                await connectDB()
                // check if a user exists
                const userExists = await User.findOne({
                    email: profile.email,
                })
                //if not, create a new user
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture,
                    })
                }
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        },
    },
})

export { handler as GET, handler as POST }
