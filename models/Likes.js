module.exports = (sequelize, DataTypes) => {
    const Likes = sequelize.define('Likes', {
        like_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        blog_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: true
    });

    Likes.associate = (models) => {
        const { User, Blog } = models;
        Likes.belongsTo(User, { foreignKey: 'user_id' });
        Likes.belongsTo(Blog, { foreignKey: 'blog_id' });
    };
    

    return Likes;
};
