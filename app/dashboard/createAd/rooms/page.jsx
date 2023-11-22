"use client"
import RoomAdFormButton from "@/components/dashboard/createAdFormButton"
import { createRoomAd } from "@/actions/actions"
const page = () => {
    return (
        <section className="h-full p-4">
            <form
                action={async (formData) => {
                    const roomAd = await createRoomAd(formData)
                    console.log("Created Room ad")
                }}
            >
                {/* <input autoComplete="false" name="hidden" className="hidden" />
                <input name="_redirect" type="hidden" value="#" /> */}

                <div className="mt-4 space-y-4">
                    <div>
                        <label className="block mb-3 text-sm font-medium text-gray-600">
                            Property title
                        </label>
                        <input
                            name="title"
                            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="No of Bedroom Apartment for rent in location"
                        />
                    </div>
                    <div className="col-span-full">
                        <label className="block mb-3 text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="email@example.com"
                        />
                    </div>
                    <div>
                        <label className="block mb-3 text-sm font-medium text-gray-600">
                            Property Type
                        </label>
                        <input
                            name="propertyType"
                            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="Apartment/ House "
                        />
                    </div>
                    <div className="col-span-full">
                        <label className="block mb-3 text-sm font-medium text-gray-600">
                            Rent
                        </label>
                        <input
                            name="rent"
                            type="number"
                            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="Annual Rent"
                        />
                    </div>
                    <div className="col-span-full">
                        <label className="block mb-3 text-sm font-medium text-gray-600">
                            Bedrooms
                        </label>
                        <input
                            name="bedrooms"
                            type="number"
                            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="Number of Bedrooms"
                        />
                    </div>
                    <div className="col-span-full">
                        <label className="block mb-3 text-sm font-medium text-gray-600">
                            Bathrooms
                        </label>
                        <input
                            name="bathrooms"
                            type="number"
                            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="Number of Bathrooms"
                        />
                    </div>
                    <div className="col-span-full">
                        <label className="block mb-3 text-sm font-medium text-gray-600">
                            Location
                        </label>
                        <input
                            name="location"
                            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="Location"
                        />
                    </div>
                    <div className="col-span-full">
                        <label className="block mb-3 text-sm font-medium text-gray-600">
                            Pets
                        </label>
                        <input
                            name="pets"
                            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="True / False"
                        />
                    </div>
                    <div className="col-span-full">
                        <label className="block mb-3 text-sm font-medium text-gray-600">
                            Smoking
                        </label>
                        <input
                            name="smoking"
                            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="True / False"
                        />
                    </div>
                    <div className="col-span-full">
                        <label className="block mb-3 text-sm font-medium text-gray-600">
                            Serviced
                        </label>
                        <input
                            name="serviced"
                            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="True / False"
                        />
                    </div>
                    <div className="col-span-full">
                        <label className="block mb-3 text-sm font-medium text-gray-600">
                            Service Charge
                        </label>
                        <input
                            name="serviceCharge"
                            type="number"
                            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            placeholder="Annual Service Charge"
                        />
                    </div>
                    <div>
                        <label className="block mb-3 text-sm font-medium text-gray-600">
                            Property Description
                        </label>
                        <div className="mt-1">
                            <textarea
                                name="description"
                                className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                placeholder="Property Description"
                                rows="4"
                            ></textarea>
                        </div>
                    </div>
                    {/* <RoomAdFormButton /> */}
                    <div className="col-span-full">
                        <RoomAdFormButton />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default page
