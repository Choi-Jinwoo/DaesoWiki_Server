export default (sequelize, DataTypes) => {
  const Post_like = sequelize.define('user', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      field: 'user_id',
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_idx: {
      field: 'post_idx',
      type: DataTypes.text,
      allowNull: false,
    },
  }, {
    tableName: 'post_like',
    timestamps: false,
  });

  return Post_like;
}