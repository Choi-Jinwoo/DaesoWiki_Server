export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      field: 'id',
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    pw: {
      field: 'pw',
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade: {
      field: 'grade',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      field: 'grade',
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'user',
    timestamps: false,
  });

  return User;
}