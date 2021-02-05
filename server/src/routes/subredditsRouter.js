const express = require('express');
const router = express.Router();

const redditService = require('../services/redditService');

router.get('/:subreddit', async (request, response) => {
    const postsLimit = request.query.limit || 10;
    const redditResponse = await redditService.getTopArticlesFromSubreddit(request.params.subreddit, postsLimit);
    response.send(redditResponse);
})

module.exports = router;