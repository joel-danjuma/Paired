import { EmailTemplate } from "@/components/email-template"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
    const body = await req.json()
    const { name, senderEmail, message } = body
    try {
        const data = await resend.emails.send({
            from: "CONTACT <onboarding@resend.dev>",
            to: ["leojjad@gmail.com"],
            subject: `Contact from ${name}`,
            text: "",
            reply_to: senderEmail,
            react: EmailTemplate({ name, message }),
        })
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error })
    }
}
