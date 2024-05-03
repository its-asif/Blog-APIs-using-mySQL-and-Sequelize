const { Likes } = require('../../../models');

const allLikes = async (req, res) => {
    try {
        const likes = await Likes.findAll();
        res.json(likes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// give a blog like... [if the user already liked the blog, then unlike it]
const likeBlog = async (req, res) => {
    try {
        const { user_id, blog_id } = req.body;
        const like = await Likes.findAll({ where: { user_id, blog_id } });

        console.log(like);
        if (like.length > 0) {
            await Likes.destroy({ where: { user_id, blog_id } });
            return res.status(200).json({ message: 'Blog unliked' });
        }

        await Likes.create({ user_id, blog_id });
        res.status(200).json({ message: 'Blog liked' });

    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ message: error.errors[0].message });
        }
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    likeBlog, allLikes
};