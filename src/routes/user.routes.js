import { Router } from 'express'
import { register, login, protectedRoute, logout } from '../controllers/user.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { registerUser, loginSchema } from '../schemas/user.schema.js'
import { authRequired } from '../middlewares/validateToken.js'
const router = Router()

router.post('/register', validateSchema(registerUser), register)
router.post('/login', validateSchema(loginSchema), login)
// authRequired hace la validacion del token JWT
router.get('/protected', authRequired, protectedRoute)
router.post('/logout', logout)
export default router
