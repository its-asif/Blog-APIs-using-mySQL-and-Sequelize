const router = require('express').Router();

const { getAllBlogs, createBlog, blogWithComments, deleteBlog } = require('./blogController');

router.get('/', getAllBlogs);

router.get('/:id', blogWithComments);

router.post('/', createBlog);

router.delete('/:id', deleteBlog);



module.exports = router;