
module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define('Blog', {
        blog_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4, 30]
            }
        },
        subtitle: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [4, 100]
            }
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: true,
            get() {
                return this.getDataValue('tags').split(';')
            },
            set(val) {
                this.setDataValue('tags', val.join(';'));
            }
        },
        status: {
            type : DataTypes.ENUM('public', 'private'),
            allowNull: false,
            defaultValue: 'public'
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        freezeTableName: true,
        timestamps: true
    });

    Blog.associate = (models) => {
        const { User, Comment, Likes } = models;
        Blog.belongsTo(User, { foreignKey: 'user_id' });
        Blog.hasMany(Comment, { foreignKey: 'blog_id' });
        Blog.hasMany(Likes, { foreignKey: 'blog_id' });
    };

    return Blog;
}