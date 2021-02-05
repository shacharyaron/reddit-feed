const express = require('express');

const port = process.env.PORT || 8080;

const subredditRouter = require('./routes/subredditsRouter');

const app = express();
app.use(express.json());
app.use('/v1/subreddits', subredditRouter);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

module.exports = app;