const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
// Import Middlewares
const notFoundHandler = require('./middlewares/notFoundHandler')
const { errorHandler, logError } = require('./middlewares/errorHandler')

// Utils
const { config } = require('./config/config')
const logger = require('./config/logger')

// Middlewares
app.use(express.json())
app.use(cors({ origin: true, credentials: true }))
app.use(helmet())

// Routes
app.use(require('./routes/index'))

// Catch 404 error
app.use(notFoundHandler)

//Errors Middleware
app.use(logError)
app.use(errorHandler)

app.listen(config.port, () => {
  logger.info(`Listening http://localhost:${config.port}`)
  // logger.info('%o', {
  //   yuu: 'jjjjj',
  //   b: { uu: 'kkkk', k: { u: { eee: 7777 } } },
  // })
})
