import { Router } from 'express'
import { deleteTest, getTest, postTest, putBootcamp } from '../controllers/test.controller.js'

const router = Router()

router.get('/testBootcamps', getTest)
router.post('/testPost', postTest)
router.delete('/testDelete/:id', deleteTest)
router.patch('/testUpdate/:id', putBootcamp)

export default router
