import { z } from 'zod'
export const registerReview = z.object({
  title: z.string({
    required_error: 'Title is required'
  }),
  comment: z.string({
    required_error: 'Comment is required'
  }),
  rating: z.number({
    required_error: 'Rating is required'
  }).min(10, {
    message: 'Rating must be least a 10 points'
  }).max(100, {
    message: 'Rating must be menor to 100 points'
  })
})
