import User from "@/models/user"
import { connectDB } from "@/utils/database"

export const get_users_by_id = async (id) => {
    await connectDB()
    const res = await User.findById(id)
    return res
}

export const get_users = async () => {
    await connectDB()
    const res = await User.find()
    return res
}
