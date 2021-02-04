const express = require('express');
const router = express.Router();
const axios = require("axios");

const REDDIT_URL = "https://www.reddit.com";

router.get('/:subreddit', async (request, response) => {
    const postsLimit = request.query.limit || 10;
    let redditResponse = await getTopArticles(request.params.subreddit, postsLimit);
    response.send(redditResponse);
})

const getTopArticles = async (subreddit, limit = 10) => {
    let redditResponse;
    try {
        redditResponse = await axios.get(
            `${REDDIT_URL}/r/${subreddit}/top/.json`,
            {
                params: {
                    't': 'all',
                    'limit': limit
                }
            });
    } catch (error) {
        console.log(`Internal server error.`);
        console.log(error.response.data.error);
        throw new Error('Unable to get a token.')
    }

    return redditResponse.data;
}

module.exports = router;