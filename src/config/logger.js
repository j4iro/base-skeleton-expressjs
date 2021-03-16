const { createLogger, format, transports } = require('winston')
const { config } = require('../config/config')

const logger = createLogger({
  transports: [
    new transports.File({
      format: format.combine(
        format.splat(),
        format.simple(),
        format.timestamp(),
        format.printf((info) => {
          return `[${info.timestamp}] ${info.level}: ${info.message}`
        })
      ),
      level: config.NODE_ENV !== 'production' ? 'debug' : 'info',
      maxSize: 5120000,
      maxFiles: 5,
      filename: require('path').join(config.mainLogs),
    }),
  ],
})

if (config.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.splat(),
        // format.timestamp(),
        format.simple()
      ),
    })
  )
}

module.exports = logger
