import mongoose from 'mongoose'
const bootcampSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    topics: {
      type: Array,
      required: true
    },
    averageRating: {
      type: Number,
      required: true
    },
    createAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: false
  }
)
export default mongoose.model('Bootcamp', bootcampSchema)
