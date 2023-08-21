import { Schema, model, models } from "mongoose"

const RoomAdSchema = new Schema({
    location: {
        type: String,
    },
    price: {
        type: Number,
    },
    bedrooms: {
        type: Number,
    },
    smoking: {
        type: Boolean,
    },
    pets: {
        type: Boolean,
    },
    // available_from: {
    //     type: Date,
    // },
    // created_at: {
    //     type: Date,
    // },
})

const RoomAds = models.RoomAds || model("RoomAds", RoomAdSchema)

export default RoomAds
