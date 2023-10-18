import { z } from 'zod'
export const createBootcampSchema = z.object({
  name: z.string({
    required_error: 'username is required'
  }).min(10, {
    message: 'Bootcamp name must be have least 10 characters'
  }),
  phone: z.number({
    required_error: 'Phone number is requires'
  }).max(20, {
    message: 'The Phone number must be have 20 numbers'
  }),
  address: z.string({
    required_error: 'Address is required'
  }).min(10, {
    message: 'The Address must be have 10 characters'
  }),
  topics: z.string({
    required_error: 'Topics is required'
  }).min(10, {
    message: 'The Topics must be have 10 characters'
  }),
  averageRating: z.number({
    required_error: 'averageRating is required'
  }).min(1, {
    message: 'The Topics must be mayor to 0 '
  }).max(10, {
    message: 'The Topics must be menor to 10 '
  })
})
