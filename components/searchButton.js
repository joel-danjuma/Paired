"use client"
import { Button, Spinner } from "@nextui-org/react"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

const SearchButton = ({ classname }) => {
    const { pending } = useFormStatus()
    return (
        <button className={classname}>
            {pending ? (
                <Spinner />
            ) : (
                <Button size="lg" radius="sm" className="w-full">
                    Search
                </Button>
            )}
        </button>
    )
}

export default SearchButton
