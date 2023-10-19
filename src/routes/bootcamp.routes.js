import { Router } from 'express'
import { deleteBootcamp, getBootcamp, getBootcamps, postBootcamp, putBootcamp } from '../controllers/bootcamp.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createBootcampSchema } from '../schemas/bootcamp.schema.js'
import { authRequired } from '../middlewares/validateToken.js'
const router = Router()

router.get('/testBootcamps', authRequired, getBootcamps)
router.get('/getBootcamp', authRequired, getBootcamp)
router.post('/testPost', authRequired, validateSchema(createBootcampSchema), postBootcamp)
router.delete('/testDelete/:id', authRequired, deleteBootcamp)
router.patch('/testUpdate/:id', authRequired, putBootcamp)

export default router
