const {User, Blog} = require('./../../../models');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);

    } catch (error) {
        console.log(error);
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        res.json(user);
    } catch (error) {
        console.log(error);
    }
};

const getUserBlogs = async (req, res) => {
    const user_id = req.params.id;
    try {
        const user = await User.findByPk(user_id, {
            include: Blog
        });
        res.json(user);
    } catch (error) {
        console.log(error);
    }
};

const createUser = async (req, res) => {
    try {
        const user = {
            username: req.body.username,
            password: req.body.password,
            age: req.body.age
        };
        console.log(user);

        const newUser = await User.create(user);
        res.json(newUser);
    } catch (error) {
        console.log(error);
        if( error.name === 'SequelizeValidationError' ) {
            return res.status(400).json({ message: error.errors[0].message });
        }

        res.status(500).json({ message: 'Server Error' });
    }
};

const updateUserAge = async (req, res) => {
    try {
        await User.update({
            age: req.body.age
        }, {
            where : {
                user_id : req.params.id
            }
        });
        res.json({ message: 'User updated successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where : {
                user_id : req.params.id
            }
        });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserAge,
    deleteUser,
    getUserBlogs,
};