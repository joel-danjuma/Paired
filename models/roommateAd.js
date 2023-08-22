import { Schema, model, models } from "mongoose"

const RoommateAdSchema = new Schema(
    {
        gender: {
            type: String,
        },
        budget: {
            type: Number,
        },
        pets: {
            type: Boolean,
        },
        smoking: {
            type: Boolean,
        },
        // availableFrom: {
        //     type: Date,
        // },
    },
    { timestamps: true }
)

const RoommateAds = models.RoommateAds || model("RoommateAds", RoommateAdSchema)

export default RoommateAds
