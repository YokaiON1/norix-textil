module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Type', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    }
  }, {
    timestamps: true // Добавить createdAt и updatedAt
  });
};