const express = require('express');
const router = express.Router();
const subredditsController = require('../controllers/subredditsController');

//todo: add some indication of top into the path?
router.get('/:subreddit', subredditsController.getTopArticlesFromSubreddit);

module.exports = router;