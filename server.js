const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const db = require('./models');


// middleware
app.use(express.json());


// router
const router = require('./src/routes/router');
app.use('/api', router);


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.log(err);
});