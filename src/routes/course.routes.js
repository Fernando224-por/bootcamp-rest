import { Router } from 'express'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { registerCourse } from '../schemas/course.schema.js'
import { deleteCourse, getCourse, getCourses, patchCourse, postCourse } from '../controllers/course.controller.js'
import { authRequired } from '../middlewares/validateToken.js'
// import { authRequired } from '../middlewares/validateToken.js'
const router = Router()
router.get('/getCourses', authRequired, getCourses)
router.get('/getCourse', authRequired, getCourse)
router.post('/newCourse', authRequired, validateSchema(registerCourse), postCourse)
router.patch('/updateCourse/:id', authRequired, validateSchema(registerCourse), patchCourse)
router.delete('/deleteCourse/:id', authRequired, deleteCourse)
export default router
