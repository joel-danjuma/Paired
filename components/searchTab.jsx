import { Tabs, Tab } from "@nextui-org/react"
import SearchCard from "./searchCard"

const SearchTab = () => {
    return (
        <div className="w-full absolute bottom-2 flex flex-col justify-center items-center px-4">
            <>
                <Tabs>
                    <Tab className="w-full" title="Room">
                        <SearchCard type="room" />
                    </Tab>
                    <Tab className="w-full" title="Roommate">
                        <SearchCard type="roommates" />
                    </Tab>
                </Tabs>
            </>
        </div>
    )
}

export default SearchTab

