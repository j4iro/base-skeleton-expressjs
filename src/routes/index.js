const express = require('express')
const app = express()

app.use('/v1', require('./v1/'))

module.exports = app
