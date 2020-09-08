export default (sequelize, DataTypes) => {
  const Slang_history = sequelize.define('user', {
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
    slang_idx: {
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

  return Slang_history;
}