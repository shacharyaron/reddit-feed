const winston = require('winston')

const LOG_FILE_PATH = './logs/server-logs.log';

dateFormat = () => {
    return new Date(Date.now()).toUTCString()
}

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: LOG_FILE_PATH
        })
    ],
    format: winston.format.printf((info) => {
        let message = `${dateFormat()} | ${info.level.toUpperCase()} | ${JSON.stringify(info.message)}`
        message = info.obj ? message + `data:${JSON.stringify(info.obj)}` : message
        return message
    })
});

module.exports = logger;