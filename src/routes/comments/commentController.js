const { Comment } = require('../../../models');

const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.json(comments);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

const commentById = async (req, res) => {
    try {
        const id = req.params.id;
        const comment = await Comment.findByPk(id);
        res.json(comment);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

const commentByBlogId = async (req, res) => {
    try {
        const blog_id = req.params.id;
        const comments = await Comment.findAll({
            where: {
                blog_id
            }
        });
        res.json(comments);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

const createComment = async (req, res) => {
    try {
        const newComment = await Comment.create(req.body);
        res.json(newComment);
    } catch (error) {
        console.log(error);
        if( error.name === 'SequelizeValidationError' ) {
            return res.status(400).json({ message: error.errors[0].message });
        }
        res.status(500).json({ message: 'Server Error' });
    }
}


module.exports = {
    getAllComments,
    createComment,
    commentById,
    commentByBlogId,
    
}