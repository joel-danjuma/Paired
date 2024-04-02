import { Lingolette } from "../../lib/lingolette"

const api = new Lingolette(
    "5ae65ce4-e04d-11ee-8617-7f4613917414",
    "6f6f9f2383820e432fdcb233083f38b0b4019478cb598c6df344225dcfa7224f"
)

api.call("org", "listUsersExt")
    .then((result) => console.log(result))
    .catch((error) => console.log("API error", error))

const Page = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <button>Click me</button>
        </div>
    )
}

export default Page
