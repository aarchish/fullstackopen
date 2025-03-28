const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const config = require('./utils/config')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

const app = express()
const blogRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')

mongoose.set('strictQuery',false)
const url = config.MONGODB_URI
logger.info('connecting to mongoDB')

mongoose.connect(url)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })


// Enable CORS for all requests
app.use(cors())

app.use(express.static('dist'))

// Enable body parsing for JSON requests
app.use(express.json())

app.use(middleware.requestLogger)

// Define a custom token for the request body
morgan.token('req', (req) => JSON.stringify(req.body))

// Use Morgan middleware with the custom token
app.use(morgan(':method :url :status - :response-time ms :req'))

// Blog Router
app.use('/api/blogs', blogRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app