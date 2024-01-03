"use client"
import { Spinner } from "@nextui-org/react"

import React from "react"

const Loading = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Spinner />
        </div>
    )
}

export default Loading
