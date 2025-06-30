

const express = require('express')
const logger = require('morgan')

const AuthRouter = require('./routes/AuthRouter')
const progressRouter = require('./routes/progressRouter')
const workoutRouter = require('./routes/workoutRouter')

const PORT = process.env.PORT || 3000

const db = require('./db')

const app = express()

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173', // imported cors to enable backend
  credentials: true 
}))

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
