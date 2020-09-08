module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      field: 'title',
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      field: 'content',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    thumbnail: {
      field: 'thumbnail',
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      field: 'category',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'post',
    timestamps: false,
  });

  return Post;
}