const redditService = require('../src/services/redditService');
const assert = require('chai').assert


describe("Reddit Service", () => {

    it("sanity", () => {
        return redditService.getTopArticlesFromSubreddit('pokemon')
            .then(result => {
                assert.equal(result.subreddit, "pokemon");
            })
    });

    it("send limit as query param", () => {
        return redditService.getTopArticlesFromSubreddit('pokemon', 3)
            .then(result => {
                assert.equal(result.subreddit, "pokemon");
                assert.equal(result.articles.length, 3);
            })
    });

    it("subreddit that does not exist should return 404", () => {
        return redditService.getTopArticlesFromSubreddit('wsbdsadjsandaskjdas ')
            .then(result => {
                throw Error("an error should have been thrown");
            }).catch(error => {
                assert.equal(error.status, 404);
            })
    });

    it("private subreddit should return 404", () => {
        return redditService.getTopArticlesFromSubreddit('wsb ')
            .then(result => {
                throw Error("an error should have been thrown");
            }).catch(error => {
                assert.equal(error.status, 404);
            })
    });

});
