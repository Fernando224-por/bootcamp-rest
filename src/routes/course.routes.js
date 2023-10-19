import { Router } from 'express'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { registerCourse } from '../schemas/course.schema.js'
import { deleteCourse, getCourse, getCourses, patchCourse, postCourse } from '../controllers/course.controller.js'
// import { authRequired } from '../middlewares/validateToken.js'
const router = Router()
router.get('/getCourses', getCourses)
router.get('/getCourse', getCourse)
router.post('/newCourse', validateSchema(registerCourse), postCourse)
router.patch('/updateCourse/:id', validateSchema(registerCourse), patchCourse)
router.delete('/deleteCourse/:id', deleteCourse)
export default router
