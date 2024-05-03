const router = require('express').Router();

const { getAllComments, createComment, commentById, commentByBlogId } = require('./commentController');

router.get('/', getAllComments);

router.get('/:id', commentById);

router.get('/blog/:id', commentByBlogId);

router.post('/', createComment);



module.exports = router;