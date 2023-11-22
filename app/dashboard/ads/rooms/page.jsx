"use client"

import { getRoomAds } from "@/actions/actions"
import { useState, useTransition } from "react"

const RoomAdPage = () => {
    const [isPending, startTransition] = useTransition()
    const [success, setSuccess] = useState(false)
    const [ads, setAds] = useState([{}])

    return (
        <section className="h-full overlfow-auto justify-center items-center flex-col gap-4">
            <>
                <button
                    onClick={() => {
                        setSuccess(false)
                        startTransition(async () => {
                            const data = await getRoomAds()
                            setAds(data)
                            console.log(ads)
                            setSuccess(true)
                            return ads
                        })
                    }}
                >
                    Get Room Ads
                </button>
                {isPending && <h1>Loading</h1>}
                {!isPending && success && <h1>Succesfull</h1>}
                {ads && (
                    <>
                        {ads.map((ad, i) => {
                            return (
                                <ul key={i} className="gap-4 ">
                                    <li className="text-[24px] font-bold">
                                        {ad.title}
                                    </li>
                                    <li>{ad.description}</li>
                                    <li>{ad.propertyType}</li>
                                    <li>Id : {ad.id}</li>
                                </ul>
                            )
                        })}
                    </>
                )}
            </>
        </section>
    )
}

export default RoomAdPage
