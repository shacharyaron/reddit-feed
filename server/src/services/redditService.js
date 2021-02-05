const axios = require('axios');
const ApiError = require("../errors/ApiError");

const REDDIT_URL = "https://www.reddit.com";

const getTopArticlesFromSubreddit = async (subreddit, limit = 50) => {
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
        console.log(error); //todo change to logger
        throw new ApiError(`Could not make the request to reddit servers: '${error.message}'`, error.response.status);
    }

    return parse(redditResponse.data);
}

const parse = (response) => {
    try {
        const rawArticles = response.data.children;

        const isSubredditPresentInResponse = rawArticles[0];
        if (!isSubredditPresentInResponse) {
            throw new ApiError(`The requested subreddit might not exist`, 404)
        }

        const parsedArticles = rawArticles.map(article => {
            return {
                id: article.data.id,
                title: article.data.title,
                text: article.data.selftext || null,
                author: article.data.author,
                createdTimestamp: article.data.created_utc,
                upvotes: article.data.ups,
                url: article.data.url,
                thumbnail: article.data.thumbnail || null, //todo if not url return null
            };
        });

        return {
            subreddit: rawArticles[0].data.subreddit,
            articles: parsedArticles
        };
    } catch (error) {
        console.log(error); //todo change to logger
        throw new ApiError(`Failed parsing response from Reddit's server: '${error.message}'`, error.status)
    }
}

module.exports = {
    getTopArticlesFromSubreddit,
}