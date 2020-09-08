export default (sequelize, DataTypes) => {
  const SlangHistory = sequelize.define('user', {
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
    slangIdx: {
      field: 'slang_idx',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    time: {
      field: 'time',
      type: DataTypes.DATETIME,
      allowNull: false,
    },
  }, {
    tableName: 'slang_history',
    timestamps: false,
  });

  return SlangHistory;
}