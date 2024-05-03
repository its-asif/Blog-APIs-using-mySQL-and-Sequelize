const router = require('express').Router();

const { allLikes, likeBlog } = require('./likeController');

router.get('/', allLikes);

router.post('/', likeBlog);

module.exports = router;