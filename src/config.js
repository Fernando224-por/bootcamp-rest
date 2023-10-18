import { config } from 'dotenv'
config()
export const PORT = process.env.PORT || 4000
export const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/BOOTCAMP'
export const FRONT_URL = process.env.FRONT_URL || 'http://localhost:5173'
