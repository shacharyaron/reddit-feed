const logRequests = require("./middleware/logRequests");
const errorHandler = require("./middleware/errorHandler");
const routeDoesNotExistHandler = require("./middleware/routeDoesNotExistHandler");
const express = require('express');
const logger = require("./utils/logger");
const subredditRouter = require('./routes/subredditsRouter');

//todo: change to correct port
const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.use(logRequests)
app.use('/v1/subreddits', subredditRouter);
app.use(routeDoesNotExistHandler)
app.use(errorHandler)

app.listen(port, () => {
    logger.info(`Started server on port: ${port}`);
})

module.exports = app;