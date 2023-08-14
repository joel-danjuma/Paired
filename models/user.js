import { Schema, model, models } from "mongoose"

const userSchema = new Schema({
    email: {
        type: string,
        unique: [true, "Email already exists"],
        required: [true, "Email address is required!"],
    },
    username: {
        type: string,
        required: [true, "Username is required"],
    },
    image: {
        type: string,
    },
})

const User = models.User || model("user", UserSchema)

export default User
