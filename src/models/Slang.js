export default (sequelize, DataTypes) => {
  const Slang = sequelize.define('user', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    grade: {
      field: 'grade',
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      field: 'content',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    title: {
      field: 'title',
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'slang',
    timestamps: false,
  });

  return Slang;
}