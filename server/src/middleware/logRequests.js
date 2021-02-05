const logger = require("../utils/logger");

const logRequests = (req, res, next) => {
    logger.info(`API request: ${req.method} ${req.url} with body:${JSON.stringify(req.body)}`)
    next();
}

module.exports = logRequests;