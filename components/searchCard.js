import { Button, Card, CardBody, Input } from "@nextui-org/react"
import { siteConfig } from "@/config/site"
import { roomSearch } from "@/actions/roomSearch"
import { SearchIcon2 } from "./icons"

const SearchCard = ({ type }) => {
    return (
        <Card className="max-w-[1000px]  min-w-[240px] h-[100px] container flex items-center justify-center bg-opacity-80 p-0 relative rounded-tl-none ">
            <CardBody className="flex-row justify-between items-center absolute left-0 right-0 p-4 w-full">
                {type === "room" ? (
                    <
                        // className="flex flex-row"
                        // action={async (formData) => {
                        //     const rooms = await roomSearch(formData)
                        // }}
                    >
                        <span className="w-full">
                            <div className="space-y-1">
                                <Input
                                    radius="none"
                                    type="text"
                                    label="Location"
                                    variant="underlined"
                                    labelPlacement="inside"
                                    name="Location"
                                    placeholder="Select Your city"
                                    className="bg-opacity-0 p-0"
                                />
                                {/* <label htmlFor="location" className="block">
                                Select your Location
                            </label>

                            <select
                                name="location"
                                id="hero-search-location"
                                className="max-w-[220px]"
                            >
                                {siteConfig.nigerianStates.map((state, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={state.toLowerCase()}
                                        >
                                            {state}
                                        </option>
                                    )
                                })}
                            </select> */}
                            </div>
                        </span>
                        <span className="w-full">
                            <div className="space-y-1">
                                <Input
                                    radius="none"
                                    type="text"
                                    label="Property Type"
                                    variant="underlined"
                                    labelPlacement="inside"
                                    name="PropertyType"
                                    placeholder="Choose Property Type"
                                />
                            </div>
                        </span>
                        <span className="w-full">
                            <div className="space-y-1">
                                <Input
                                    radius="none"
                                    type="number"
                                    label="Price Range"
                                    variant="underlined"
                                    labelPlacement="inside"
                                    name="Price"
                                    placeholder="100,000 - 1,000,000"
                                />
                            </div>
                        </span>
                    </>
                ) : (
                    <>
                        <span className="w-full">
                            {/* <div className="space-y-1">
                                <Input
                                    radius="none"
                                    type="text"
                                    label="Location"
                                    variant="underlined"
                                    labelPlacement="outside"
                                    name="Location"
                                    placeholder="Select Your city"
                                    className="bg-opacity-0 p-0"
                                /> */}
                            <label htmlFor="location" className="block">
                                Select your Location
                            </label>

                            <select
                                name="location"
                                id="hero-search-location"
                                className="max-w-[220px]"
                            >
                                {siteConfig.nigerianStates.map((state, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={state.toLowerCase()}
                                        >
                                            {state}
                                        </option>
                                    )
                                })}
                            </select>
                            {/* </div> */}
                        </span>
                        <span className="w-full">
                            <div className="space-y-1">
                                <Input
                                    radius="none"
                                    type="text"
                                    label="Property Type"
                                    variant="underlined"
                                    labelPlacement="outside"
                                    name="PropertyType"
                                    placeholder="Choose Property Type"
                                />
                            </div>
                        </span>
                        <span className="w-full">
                            <div className="space-y-1">
                                <Input
                                    radius="none"
                                    type="number"
                                    label="Price Range"
                                    variant="underlined"
                                    labelPlacement="outside"
                                    name="Price"
                                    placeholder="100,000 - 1,000,000"
                                />
                            </div>
                        </span>
                    </>
                )}
                <SearchIcon2 />
                {/* <Button>
                   
                    <span>Search</span>
                </Button> */}
            </CardBody>
        </Card>
    )
}

export default SearchCard
