const router = require('express').Router();

const { getAllBlogs, createBlog, blogWithComments } = require('./blogController');

router.get('/', getAllBlogs);

router.get('/:id', blogWithComments);

router.post('/', createBlog);



module.exports = router;