import { useState } from "react"
import { Button, ButtonGroup } from "@nextui-org/react"
import SearchCard from "./searchCard"

const menu = ["Rooms", "Roommates"]

const HeroSeacrh = () => {
    const [roomIsActive, setRoomIsActive] = useState(true)
    const [roommateIsActive, setRoommateIsActive] = useState(false)

    return (
        <div className="w-full absolute bottom-8 flex flex-col items-center px-4">
            <div className="max-w-[1000px] flex w-full justify-start">
                <Button
                    className="rounded-b-none rounded-r-none bg-white bg-opacity-80"
                    disableRipple
                    onPress={() => {
                        setRoommateIsActive(false)
                        setRoomIsActive(true)
                        console.log(roomIsActive)
                    }}
                >
                    Rooms
                </Button>
                <Button
                    disableRipple
                    className="rounded-b-none rounded-l-none bg-white bg-opacity-80"
                    onPress={() => {
                        setRoomIsActive(false)
                        setRoommateIsActive(true)
                        console.log(!roommateIsActive)
                    }}
                >
                    Roommates
                </Button>
            </div>
            {roomIsActive && <SearchCard type="room" />}
            {roommateIsActive && <SearchCard type="roommate" />}
        </div>
    )
}

export default HeroSeacrh
