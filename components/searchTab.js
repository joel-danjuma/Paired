import { useState } from "react"
import { Button } from "@nextui-org/react"
import SearchCard from "./searchCard"

const menu = ["Rooms", "Roommates"]

const SearchTab = () => {
    const [roomTabIsActive, setRoomTabIsActive] = useState(true)
    const [roommateTabIsActive, setRoommateTabIsActive] = useState(false)

    return (
        <div className="w-full absolute bottom-8 flex flex-col items-center px-4">
            <div className="max-w-[1000px] flex w-full justify-start">
                <Button
                    className="rounded-b-none rounded-r-none bg-white bg-opacity-80"
                    disableRipple
                    onPress={() => {
                        setRoommateTabIsActive(false)
                        setRoomTabIsActive(true)
                        console.log(roomTabIsActive)
                    }}
                >
                    Rooms
                </Button>
                <Button
                    disableRipple
                    className="rounded-b-none rounded-l-none bg-white bg-opacity-80"
                    onPress={() => {
                        setRoomTabIsActive(false)
                        setRoommateTabIsActive(true)
                        console.log(!roommateTabIsActive)
                    }}
                >
                    Roommates
                </Button>
            </div>
            {roomTabIsActive && <SearchCard type="room" />}
            {roommateTabIsActive && <SearchCard type="roommate" />}
        </div>
    )
}

export default SearchTab
