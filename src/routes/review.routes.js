import { Router } from 'express'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { registerReview } from '../schemas/review.schema.js'
import { postReview } from '../controllers/review.controller.js'
// import { authRequired } from '../middlewares/validateToken.js'
const router = Router()
router.post('/newReview', validateSchema(registerReview), postReview)
export default router
