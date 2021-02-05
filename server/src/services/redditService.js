const axios = require("axios");

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
        console.log(`Internal server error.`);
        console.log(error.response.data.error);
        throw new Error('Unable to get a token.')
    }

    return parse(redditResponse.data);
}

const parse = (response) => {
    try {
        const rawArticles = response.data.children;
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
        throw new Error(`Failed parsing response from reddit server: ${error.message}`)
    }
}

module.exports = {
    getTopArticlesFromSubreddit,
}