export default (sequelize, DataTypes) => {
  const Post_history = sequelize.define('user', {
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    time: {
      field: 'time',
      type: DataTypes.DATETIME,
      allowNull: false,
    },
  }, {
    tableName: 'post_history',
    timestamps: false,
  });

  return Post_history;
}