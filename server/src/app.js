const express = require('express');
const errorHandler = require("./middleware/errorHandler");
const routeDoesNotExistHandler = require("./middleware/routeDoesNotExistHandler");
const subredditRouter = require('./routes/subredditsRouter');

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use('/v1/subreddits', subredditRouter);

app.use(routeDoesNotExistHandler)
app.use(errorHandler)

app.listen(port, () => {
    //todo use logger
    console.log(`listening at http://localhost:${port}`)
})

module.exports = app;