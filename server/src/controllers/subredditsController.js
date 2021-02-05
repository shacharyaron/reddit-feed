const redditService = require('../services/redditService');

const getTopArticlesFromSubreddit = async (request, response, next) => {
    try {
        const postsLimit = request.query.limit || 50;
        const redditResponse = await redditService.getTopArticlesFromSubreddit(request.params.subreddit, postsLimit);
        response.send(redditResponse);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getTopArticlesFromSubreddit
}