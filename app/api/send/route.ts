// import { EmailTemplate } from "@/components/email-template"
import { NextRequest } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
    const body = await req.json()
    const { userEmail } = body[0]
    const { pairedEmail } = body[1]
    try {
        const data = await resend.emails.send(
            {
                from: "CONTACT <onboarding@resend.dev>",
                to: userEmail,
                subject: `Welcome to Paired - Your Journey to Ideal Living Spaces Begins!`,
                text: `

                    Welcome to Paired – your ultimate destination for finding compatible roommates and discovering ideal living spaces!
                    We're thrilled to have you on board the waitlist and can't wait to help you create meaningful connections and locate the perfect shared flat. Here's a glimpse of what Paired has to offer:
                    Create Your Profile: Showcase your preferences, interests, and lifestyle to find roommates who match your vibe.
                    Search for Roommate and Room Ads: Explore a diverse range of ads tailored to your preferences and discover the best matches.
                    Connect with Potential Matches: Start meaningful conversations and build connections with potential roommates to ensure a harmonious living experience.
                    While you eagerly await your turn, feel free to explore more about Paired and get ready for an exciting journey ahead.
                    Thank you for choosing Paired – where finding the perfect roommate and shared flat becomes a breeze. If you have any questions or need assistance, our dedicated support team is here to help at support@paired.com.

                    Best regards,

                    The Paired Team
                `,
                reply_to: pairedEmail,
            }
            // {
            //     from: "CONTACT <onboarding@resend.dev>",
            //     to: pairedEmail,
            //     subject: `New User added to Waitlist`,
            //     text: ` User with email Address : ${userEmail} has been added to the waitlist`,
            //     reply_to: pairedEmail,
            //     react: EmailTemplate({ name, message }),
            // },
        )
        return Response.json(data)
    } catch (error) {
        return Response.json({ error })
    }
}
