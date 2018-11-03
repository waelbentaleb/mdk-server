import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('user', userSchema)
