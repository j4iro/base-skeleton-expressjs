const express = require('express')
const app = express()
const cors = require('cors')

// Utils
const { config } = require('./config/config')
const logger = require('./config/logger')

// Middlewares
app.use(express.json())
app.use(cors({ origin: true, credentials: true }))

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(config.port, () => {
  logger.info(`Listening http://localhost:${config.port}`)
  // logger.info('%o', {
  //   yuu: 'jjjjj',
  //   b: { uu: 'kkkk', k: { u: { eee: 7777 } } },
  // })
})
