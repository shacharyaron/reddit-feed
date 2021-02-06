const requestsLogger = require("./middleware/requestsLogger");
const errorHandler = require("./middleware/errorHandler");
const routeDoesNotExistHandler = require("./middleware/routeDoesNotExistHandler");
const cors = require('cors');
const express = require('express');
const logger = require("./utils/logger");
const subredditRouter = require('./routes/subredditsRouter');

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(requestsLogger)
app.use('/api/v1/subreddits', subredditRouter);
app.use(routeDoesNotExistHandler)
app.use(errorHandler)

app.listen(port, () => {
    logger.info(`Started server on port: ${port}`);
})

module.exports = app;