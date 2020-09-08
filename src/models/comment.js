export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('user', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    content: {
      field: 'content',
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      field: 'user_id',
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_idx: {
      field: 'post_idx',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'comment',
    timestamps: false,
  });

  return Comment;
}