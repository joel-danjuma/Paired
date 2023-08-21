import { Schema, model, models } from "mongoose"

const RoomAdSchema = new Schema({
    location: {
        type: String,
        required: [true, "Input Location"],
    },
    price: {
        type: Number,
        required: [true, "Input Price"],
    },
    bedrooms: {
        type: Number,
        required: [true, "Input no of rooms"],
    },
    smoking: {
        type: Boolean,
        required: [true],
    },
    pets: {
        type: Boolean,
        required: [true],
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
