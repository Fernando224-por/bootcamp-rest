import mongoose from 'mongoose'
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  weeks: {
    type: Number,
    required: true
  },
  tuition: {
    type: Number,
    required: true
  },
  minimunSkill: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner',
    required: true
  }
},
{
  timestamps: true
})
export default mongoose.model('Course', courseSchema)
