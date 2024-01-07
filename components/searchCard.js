import {
    Button,
    Card,
    CardBody,
    Input,
    Select,
    SelectSection,
    SelectItem,
} from "@nextui-org/react"
import { siteConfig } from "@/config/site"
import { roomSearch } from "@/actions/roomSearch"
import SearchButton from "./searchButton"
import { useState } from "react"

const SearchCard = ({ type }) => {
    const [location, setLocation] = useState("")
    const [propertyType, setPropertyType] = useState("")
    return (
        <Card className="p-4 bg-opacity-80 h-fit lg:h-[100px]">
            {type === "room" ? (
                <form
                    className="grid grid-flow-row lg:grid-cols-5 lg:grid-rows-2 grid-cols-4 grid-rows-4 gap-2 items-center w-full h-full justify-center "
                    action={async (formData) => {
                        const rooms = await roomSearch(formData)
                        console.log(rooms)
                    }}
                >
                    <Select
                        radius="sm"
                        name="location"
                        label="Select Your City"
                        placeholder="City"
                        className="lg:col-span-1 lg:row-span-full col-span-2 row-span-2 "
                    >
                        <SelectSection>
                            {siteConfig.nigerianStates.map((state, i) => {
                                return (
                                    <SelectItem
                                        key={i}
                                        value={state.toLowerCase()}
                                    >
                                        {state}
                                    </SelectItem>
                                )
                            })}
                        </SelectSection>
                    </Select>

                    <Select
                        radius="sm"
                        name="PropertyType"
                        label="Property Type"
                        placeholder="Type"
                        className="lg:col-span-1 lg:row-span-full col-span-2 row-span-2"
                    >
                        <SelectSection>
                            {siteConfig.propertyType.map((type, i) => {
                                return (
                                    <SelectItem
                                        key={i}
                                        value={type.toLowerCase()}
                                    >
                                        {type}
                                    </SelectItem>
                                )
                            })}
                        </SelectSection>
                    </Select>
                    <Select
                        radius="sm"
                        name="price"
                        label="Min Price"
                        placeholder="Min"
                        className="lg:col-span-1 lg:row-span-2 col-span-2 row-span-2"
                    >
                        <SelectSection>
                            {siteConfig.budget.map((price, i) => {
                                return (
                                    <SelectItem key={i} value={price}>
                                        {`#${price.toString()}`}
                                    </SelectItem>
                                )
                            })}
                        </SelectSection>
                    </Select>
                    {/* <Select
                        radius="sm"
                        name="maxPrice"
                        label="Max Price"
                        placeholder="Max"
                        className="lg:col-span-1 lg:row-span-2 col-span-2 row-span-2"
                    >
                        <SelectSection>
                            {siteConfig.budget.map((price, i) => {
                                return (
                                    <SelectItem key={i} value={price}>
                                        {`#${price.toString()}`}
                                    </SelectItem>
                                )
                            })}
                        </SelectSection>
                    </Select> */}

                    <SearchButton
                        classname={
                            "lg:col-span-1 lg:row-span-2 col-span-full  row-span-1 "
                        }
                    />
                </form>
            ) : (
                <form
                    className="grid grid-flow-row lg:grid-cols-5 lg:grid-rows-2 grid-cols-4 grid-rows-4 gap-2 items-center w-full h-full justify-center "
                    // className="flex flex-row"
                    // action={async (formData) => {
                    //     const rooms = await roomSearch(formData)
                    // }}
                >
                    <Select
                        radius="sm"
                        name="location"
                        label="Select Your City"
                        placeholder="City"
                        className="lg:col-span-1 lg:row-span-full col-span-2 row-span-2 "
                    >
                        {siteConfig.nigerianStates.map((state, i) => {
                            return (
                                <SelectItem key={i} value={state.toLowerCase()}>
                                    {state}
                                </SelectItem>
                            )
                        })}
                    </Select>

                    <Select
                        radius="sm"
                        name="PropertyType"
                        label="Property Type"
                        placeholder="Type"
                        className="lg:col-span-1 lg:row-span-full col-span-2 row-span-2"
                    >
                        {siteConfig.propertyType.map((type, i) => {
                            return (
                                <SelectItem key={i} value={type.toLowerCase()}>
                                    {type}
                                </SelectItem>
                            )
                        })}
                    </Select>
                    <Select
                        radius="sm"
                        name="minPrice"
                        label="Min Price"
                        placeholder="No Min"
                        className="lg:col-span-1 lg:row-span-2 col-span-2 row-span-2"
                    >
                        {siteConfig.budget.map((price, i) => {
                            return (
                                <SelectItem key={i} value={price}>
                                    {`#${price.toString()}`}
                                </SelectItem>
                            )
                        })}
                    </Select>
                    <Select
                        radius="sm"
                        name="maxPrice"
                        label="Max Price"
                        placeholder="No Max"
                        className="lg:col-span-1 lg:row-span-2 col-span-2 row-span-2"
                    >
                        {siteConfig.budget.map((price, i) => {
                            return (
                                <SelectItem key={i} value={price}>
                                    {`#${price.toString()}`}
                                </SelectItem>
                            )
                        })}
                    </Select>

                    <SearchButton
                        classname={
                            "lg:col-span-1 lg:row-span-2 col-span-full  row-span-1 "
                        }
                    />
                </form>
            )}
        </Card>
    )
}

export default SearchCard
