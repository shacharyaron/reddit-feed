const express = require('express');
const router = express.Router();
const subredditsController = require('../controllers/subredditsController');

router.get('/:subreddit/top', subredditsController.getTopArticlesFromSubreddit);

module.exports = router;