const express = require('express');
const app = express();
const axios = require("axios");

const REQUEST_CONFIG = { headers: { "Content-Type": "application/json" } };
const port = 3000;

const REDDIT_URL = "https://www.reddit.com";

app.get('/', async (req, res) => {
    let redditResponse = await getTopArticles("wallstreetbets", 2);
    console.log(redditResponse);
    res.send(redditResponse);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

let getTopArticles = async (subreddit, limit = 10) => {
    let redditResponse;
    try {
        redditResponse = await axios.get(
            `${REDDIT_URL}/r/${subreddit}/top/.json`,
            {
                t: 'all',
                'limit': limit,
            });
    } catch (error) {
        console.log(`Internal server error.`);
        console.log(error.response.data.msg);
        console.log(error.response.data.error);
        throw new Error('Unable to get a token.')
    }

    return redditResponse.data;
}