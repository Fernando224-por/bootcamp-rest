import { Router } from 'express'
import { deleteTest, getTest, postTest, putBootcamp } from '../controllers/test.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createBootcampSchema } from '../schemas/bootcamp.schema.js'
import { authRequired } from '../middlewares/validateToken.js'
const router = Router()

router.get('/testBootcamps', authRequired, getTest)
router.post('/testPost', authRequired, validateSchema(createBootcampSchema), postTest)
router.delete('/testDelete/:id', authRequired, deleteTest)
router.patch('/testUpdate/:id', authRequired, putBootcamp)

export default router
