const router = require('express').Router();
const { getAllUsers, getUserById, createUser, deleteUser, updateUserAge, getUserBlogs } = require('./userController');


router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.get('/blogs/:id', getUserBlogs);

router.post('/', createUser);

router.put('/:id', updateUserAge);

router.delete('/:id', deleteUser);


module.exports = router;