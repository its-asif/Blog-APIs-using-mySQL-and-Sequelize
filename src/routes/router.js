const express = require('express');
const app = express();
const userRoute = require('./users/userRoute');
const blogRoute = require('./blogs/blogRoute');
const commentRoute = require('./comments/commentRoute');
const likeRoute = require('./likes/likeRoute');


// routes
// app.use('/', (req, res) => {
//     res.send('Welcome to the blog API');
// });

app.use('/users', userRoute);

app.use('/blogs', blogRoute);

app.use('/comments', commentRoute);

app.use('/likes', likeRoute);

module.exports = app;


