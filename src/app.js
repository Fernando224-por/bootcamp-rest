import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import testRouter from './routes/test.routes.js'
import userRouter from './routes/user.routes.js'
import courseRouter from './routes/course.routes.js'
import reviewRouter from './routes/review.routes.js'

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,PATCH,PUT,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}))
app.use(cookieParser())
app.use('/api', testRouter)
app.use('/api', userRouter)
app.use('/api', courseRouter)
app.use('/api', reviewRouter)

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Route not Found'
  })
})

export default app
