const { Blog, Comment, Likes } = require('../../../models');

// get all blogs
const getAllBlogs = async (req, res) =>{
    try {
        
        const blogs = await Blog.findAll();
        
        const blogsWithLikes = await Promise.all(blogs.map(async blog => {
            const likes = await Likes.findAll({ where: { blog_id: blog.blog_id } });
            return {
                ...blog.toJSON(),
                likes: likes.length
            }
        }));

        res.json(blogsWithLikes);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

//  get blog with comments
const blogWithComments = async (req, res) => {
    try {
        const blog_id = req.params.id;
        const blog = await Blog.findByPk(blog_id, {
            include: Comment
        });
        res.json(blog);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

// create a blog
const createBlog = async (req, res) => {
    try {
        console.log(req.body);
        const newBlog = await Blog.create(req.body);
        res.json(newBlog);

    } catch (error) {
        console.log(error);
        if( error.name === 'SequelizeValidationError' ) {
            return res.status(400).json({ message: error.errors[0].message });
        }
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = {
    getAllBlogs,
    createBlog,
    blogWithComments,
}