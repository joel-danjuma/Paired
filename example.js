// const { Lingolette } = require("./lib/lingolette")

// const api = new Lingolette(
//     "5ae65ce4-e04d-11ee-8617-7f4613917414",
//     "6f6f9f2383820e432fdcb233083f38b0b4019478cb598c6df344225dcfa7224f"
// )

// ;(async () => {
//     console.log("\n===\nCreate user session\n---")

//     // try {
//     //     const result = await api.call("org", "createUserSession", {
//     //         userId: "5ae65ce4-e04d-11ee-8617-7f4613917414",
//     //     })
//     //     console.log("Session token:", result.data?.token)
//     // } catch (error) {
//     //     console.log("createUserSession API error:", error)
//     // }

//     // let newUserId = null

//     console.log("\n===\nAdd user\n---")
//     try {
//         const result = await api.call("org", "addUser", {
//             name: "Dawn",
//             targetLng: "en",
//             nativeLng: "en",
//             languageLevel: 0,
//         })

//         console.log("User added:", result)
//         newUserId = result.data?.id
//     } catch (error) {
//         console.log("addUser API error:", error)
//     }

//     console.log("\n===\nList users\n---")

//     try {
//         const result = await api.call("org", "listUsers")

//         console.log("Org users:", result.data)
//     } catch (error) {
//         console.log("listUsers API error:", error)
//     }

//     if (!newUserId) {
//         return
//     }
// })()

const { Lingolette } = require("./lib/lingolette")

// Initialize the Lingolette API client with your credentials
const api = new Lingolette(
    "5ae65ce4-e04d-11ee-8617-7f4613917414", // Replace with your username
    "6f6f9f2383820e432fdcb233083f38b0b4019478cb598c6df344225dcfa7224f" // Replace with your API secret
)

// Function to get a session token for a user
async function getSessionToken(userId) {
    try {
        const result = await api.call("org", "createUserSession", {
            userId: userId,
        })
        return result.data?.token
    } catch (error) {
        console.error("createUserSession API error:", error)
        return null
    }
}

// Example usage
;(async () => {
    const userId = "7002d0b6-f449-11ee-9184-5324b0efbaf8" // Replace with the user ID you want to get a session token for
    const sessionToken = await getSessionToken(userId)
    console.log("Session token:", sessionToken)
})()
