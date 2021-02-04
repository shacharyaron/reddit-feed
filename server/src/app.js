const express = require('express');

const port = process.env.PORT || 8080;

const subredditRouter = require('./routes/subredditRouter');

const app = express();
app.use('/subreddit', subredditRouter);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

module.exports = app;