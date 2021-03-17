const logger = require('../config/logger')
const { config } = require('../config/config')

function withErrorStack(error, stack) {
  let rptaJson = {
    success: false,
  }
  if (config.NODE_ENV !== 'production') {
    rptaJson.msg = error
    rptaJson.stack = stack
  }
  return rptaJson
}

function logError(err, req, res, next) {
  logger.err('%o', err)
  next(err)
}

function errorHandler(err, req, res, next) /*eslint-disable-line*/ {
  res.status(err.status || 500)
  res.json(withErrorStack(err.message, err.stack))
}

module.exports = {
  logError,
  errorHandler,
}
