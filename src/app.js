import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import testRouter from './routes/test.routes.js'

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,PATCH,PUT,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}))

app.use('/api/test', testRouter)

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Route not Found'
  })
})

export default app
