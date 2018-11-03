import mongoose, { Schema } from 'mongoose'

const dataSchema = new Schema(
  {
    agent: { type: Schema.Types.ObjectId, ref: 'agent' },
    url: { type: String },
    fileType: { type: String }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('data', dataSchema)
