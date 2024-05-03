const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4,10]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            defaultValue: 21,
            allowNull: false,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    })

    // Before saving the user, hash the password
    User.beforeCreate(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
    });

    User.associate = (models) => {
        const { Blog, Comment, Likes } = models;
        User.hasMany(Blog, { foreignKey: 'user_id' });
        User.hasMany(Comment, { foreignKey: 'user_id' });
        User.hasMany(Likes, { foreignKey: 'user_id' });
    };
    

    return User;
}