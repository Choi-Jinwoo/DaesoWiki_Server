export default (sequelize, DataTypes) => {
  const PostLike = sequelize.define('user', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      field: 'user_id',
      type: DataTypes.STRING,
      allowNull: false,
    },
    postIdx: {
      field: 'post_idx',
      type: DataTypes.text,
      allowNull: false,
    },
  }, {
    tableName: 'post_like',
    timestamps: false,
  });

  return PostLike;
}