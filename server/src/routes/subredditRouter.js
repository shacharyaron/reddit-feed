const express = require('express');
const router = express.Router();
const axios = require("axios");

const REDDIT_URL = "https://www.reddit.com";

router.get('/:subreddit', async (request, response) => {
    const postsLimit = request.query.limit || 10;
    let redditResponse = await getTopArticles(request.params.subreddit, postsLimit);
    response.send(redditResponse);
})

const getTopArticles = async (subreddit, limit = 50) => {
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

    return parse(redditResponse.data);
}

const parse = (response) => {
    try {
        const posts = response.data.children;
        return posts.map(post => {
            return {
                subreddit: post.data.subreddit,
                id: post.data.id,
                // type: post.kind, //todo: add custom type?
                title: post.data.title,
                author: post.data.author,
                createdTimestamp: post.data.created_utc,
                upvotes: post.data.ups,
                url: post.data.url,
                thumbnail: post.data.thumbnail || null,
            };
        });
    } catch (error) {
        throw new Error(`Failed parsing response from reddit server: ${error.message}`)
    }
}

module.exports = router;