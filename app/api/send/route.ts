// import { EmailTemplate } from "@/components/email-template"
import { NextRequest } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_f4APUMi9_69FbNnFCYhY3mZk4ebrB8PBV")

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
                text: `some text`,
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
        console.log(data)
        return Response.json(data)
    } catch (error) {
        return Response.json({ error })
    }
}
