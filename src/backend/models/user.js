
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
  });
  User.associate = function (models) {
    User.belongsToMany(models.Collection, { through: models.User_Collection });
  };
  return User;
};
