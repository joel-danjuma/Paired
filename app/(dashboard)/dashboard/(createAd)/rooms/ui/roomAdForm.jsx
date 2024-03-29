import React from "react"
import RoomAdFormButton from "../../../ui/createAdFormButton"
import { createRoomAd } from "../../../../../../actions/actions"

const inputs = [
    {
        label: "Property title",
        name: "title",
        type: "text",
        placeholder: "No of Bedroom Apartment for rent in location",
    },
    {
        label: " Email",
        name: "email",
        type: "email",
        placeholder: "email@example.com",
    },
    {
        label: "Property Type",
        name: "propertyType",
        type: "text",
        placeholder: "Apartment/ House",
    },
    {
        label: "Rent",
        name: "rent",
        type: "number",
        placeholder: "Annual Rent",
    },
    {
        label: "Bedrooms",
        name: "bedrooms",
        type: "number",
        placeholder: "No of Bedrooms",
    },
    {
        label: "Bathrooms",
        name: "bathrooms",
        type: "number",
        placeholder: "No of Bathrooms",
    },
    {
        label: "Location",
        name: "location",
        type: "text",
        placeholder: "Location",
    },
    {
        label: "Pets",
        name: "pets",
        type: "text",
        placeholder: "True / False",
    },
    {
        label: "Smoking",
        name: "smoking",
        type: "text",
        placeholder: "True/ False",
    },
    {
        label: "Serviced",
        name: "serviced",
        type: "text",
        placeholder: "True / False",
    },
    {
        label: "Service Charge",
        name: "serviceCharge",
        type: "number",
        placeholder: "Annual Service Charge",
    },
    {
        label: "Property Description",
        name: "description",
        type: "text",
        placeholder: "Property description",
        rows: "4",
    },
]

const RoomAdForm = () => {
    return (
        <>
            <form
                action={async (formData) => {
                    const roomAd = await createRoomAd(formData)
                    console.log("Created Room ad")
                }}
                className="py-2 grid grid-flow-row lg:grid-rows-6 lg:grid-cols-2 grid-cols-1 gap-4"
            >
                {inputs.map((input, i) => (
                    <div key={i} className="mt-4 space-y-4">
                        <label className="lg:col-span-1 col-span-full">
                            {input.label}
                        </label>
                        <input
                            name={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                        />
                    </div>
                ))}
                <div className="col-span-full flex justify-center w-full py-8">
                    <RoomAdFormButton />
                </div>
            </form>
        </>
    )
}

export default RoomAdForm
