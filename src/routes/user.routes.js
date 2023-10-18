import { Router } from 'express'
import { register } from '../controllers/user.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { registerUser } from '../schemas/user.schema.js'
const router = Router()

router.post('/register', validateSchema(registerUser), register)
export default router
