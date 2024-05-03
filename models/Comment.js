module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        comment_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 200]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        blog_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, 
    {
        freezeTableName: true,
        timestamps: true
    });

    Comment.associate = (models) => {
        const { User, Blog } = models;
        Comment.belongsTo(User, { foreignKey: 'user_id'});
        Comment.belongsTo(Blog, { foreignKey: 'blog_id'});
    };

    return Comment;
};