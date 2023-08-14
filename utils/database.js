import mongoose from "mongoose"

let isConnected = false
export const connectDB = async () => {
    mongoose.set("strictQuery", true)

    if (isConnected) {
        console.log("Database is already connected")
        return
    }
    try {
        await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "paired",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true
        console.log("Database Connection succesful")
    } catch (error) {
        console.log(error)
    }
}
