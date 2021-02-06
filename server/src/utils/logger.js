const winston = require('winston')

dateFormat = () => {
    return new Date(Date.now()).toUTCString()
}

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.printf((info) => {
        let message = `${dateFormat()} | ${info.level.toUpperCase()} | ${JSON.stringify(info.message)}`
        message = info.obj ? message + `data:${JSON.stringify(info.obj)}` : message
        return message
    })
});

module.exports = logger;