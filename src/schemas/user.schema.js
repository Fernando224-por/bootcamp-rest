import { z } from 'zod'
export const registerUser = z.object({
  name: z.string({
    required_error: 'Name is required'
  }),
  email: z.string({
    required_error: 'Email is required'
  }).email({
    message: 'Invalid Email'
  }),
  role: z.string({
    required_error: 'Role is Required'
  }),
  password: z.string({
    required_error: 'Password is required'
  }).min(8, {
    message: 'Password must be a least a 8 characters'
  })
})
