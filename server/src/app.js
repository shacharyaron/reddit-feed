const express = require('express');
const app = express();
const axios = require("axios");
const router = express.Router();

const port = process.env.PORT || 8080;
const REDDIT_URL = "https://www.reddit.com";

router.get('/:subreddit', async (req, res) => {
    const postsLimit = req.query.limit || 10;
    let redditResponse = await getTopArticles(req.params.subreddit, postsLimit);
    console.log(redditResponse);
    res.send(redditResponse);
})

router.get('/', async (req, res) => {
    res.send("server is alive");
})

app.use('/api', router);
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

const getTopArticles = async (subreddit, limit = 10) => {
    let redditResponse;
    try {
        redditResponse = await axios.get(
            `${REDDIT_URL}/r/${subreddit}/top/.json`,
            {
                params: {
                    't': 'all',
                    'limit': 1
                }
            });
    } catch (error) {
        console.log(`Internal server error.`);
        console.log(error.response.data.error);
        throw new Error('Unable to get a token.')
    }

    return redditResponse.data;
}