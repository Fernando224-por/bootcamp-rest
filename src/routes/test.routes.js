import { Router } from 'express'
import { deleteTest, getTest, postTest, putBootcamp } from '../controllers/test.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createBootcampSchema } from '../schemas/bootcamp.schema.js'

const router = Router()

router.get('/testBootcamps', getTest)
router.post('/testPost', validateSchema(createBootcampSchema), postTest)
router.delete('/testDelete/:id', deleteTest)
router.patch('/testUpdate/:id', putBootcamp)

export default router
