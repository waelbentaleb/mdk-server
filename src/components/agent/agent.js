import mongoose, { Schema } from 'mongoose'

const agentSchema = new Schema(
  {
    computerId: { type: String }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('agent', agentSchema)
