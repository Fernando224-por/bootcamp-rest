import { z } from 'zod'
export const registerCourse = z.object({
  title: z.string({
    required_error: 'Name is required'
  }).min(6, {
    message: 'Name of course must be a least 6 characters'
  }),
  description: z.string({
    required_error: 'Description is required'
  }).min(8, {
    message: 'Description must be a least 100 characters'
  }),
  weeks: z.number({
    required_error: 'Weeks is required'
  }).min(1, {
    message: 'Weeks must be a least 1 week'
  }).max(100, {
    message: 'Weeks must be menor to 100 weeks'
  }),
  tuition: z.number({
    required_error: 'Tuition is required'
  }).min(28, {
    message: 'Tuition must be a 28 minimun'
  }).max(130, {
    message: 'Max value for tuition is 130'
  }),
  minimunSkill: z.enum(['Beginner', 'Intermediate', 'Advanced'], { required_error: 'MinimunSkill is required' })
})
