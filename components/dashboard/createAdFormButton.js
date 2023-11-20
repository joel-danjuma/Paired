import { experimental_useFormStatus as useFormStatus } from "react-dom"

const RoomAdFormButton = () => {
    const { pending } = useFormStatus()
    return (
        <button className="flex mx-auto text-black bg-gray-300 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded-xl text-lg">
            {pending ? "Posting your Ad ..." : "Create Ad"}
        </button>
    )
}

export default RoomAdFormButton
