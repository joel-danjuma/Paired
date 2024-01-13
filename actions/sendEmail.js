"use server"

export const sendEmail = async (formData) => {
    const name = formData.get("name")
    const senderEmail = formData.get("email")
    const message = formData.get("message")

    const email = {
        name,
        email: senderEmail,
        message,
    }

    try {
        await fetch(`${process.env.URL}/api/send`, {
            method: "POST",
            body: JSON.stringify(email),
            headers: {
                "Content-Type": "application/json",
            },
        })
    } catch (error) {
        return { error }
    }
}
