"use server"

export const createRoomAd = async (formData) => {
    const location = formData.get("location")
    const bedrooms = formData.get("bedrooms")
    const pets = formData.get("pets")
    const price = formData.get("price")
    const smoking = formData.get("smoking")
}
