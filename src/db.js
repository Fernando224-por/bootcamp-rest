import mongoose from 'mongoose'
import { MONGO_URL } from './config.js'
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      autoIndex: true,
      family: 4
    })
    console.log('MongoDB is connected')
  } catch (error) {
    console.error(error)
  }
}
