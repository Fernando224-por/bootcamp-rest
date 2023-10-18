import { Router } from 'express'
import { register, login } from '../controllers/user.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { registerUser, loginSchema } from '../schemas/user.schema.js'
const router = Router()

router.post('/register', validateSchema(registerUser), register)
router.post('/login', validateSchema(loginSchema), login)
export default router
