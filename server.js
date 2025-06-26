const express = require('express')
const logger = require('morgan')

const AuthRouter = require('./routes/AuthRouter')
const ProgressRouter = require('./routes/progressRouter')
const WorkoutRouter = require('./routes/workoutRouter')

const PORT = process.env.PORT || 3000

const db = require('./db')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', AuthRouter)
app.use('/workout', workoutRouter)
app.use('/progress', progressRouter)

app.get('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
