export default (sequelize, DataTypes) => {
  const PostHistory = sequelize.define('user', {
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

  return PostHistory;
}