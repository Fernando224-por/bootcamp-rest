import { Router } from 'express'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { registerCourse } from '../schemas/course.schema.js'
import { postCourse } from '../controllers/course.controller.js'
// import { authRequired } from '../middlewares/validateToken.js'
const router = Router()
router.post('/newCourse', validateSchema(registerCourse), postCourse)
export default router
