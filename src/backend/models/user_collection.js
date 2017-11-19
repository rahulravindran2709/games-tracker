
module.exports = (sequelize, DataTypes) => {
  const User_Collection = sequelize.define('User_Collection', {
    deletedAt: DataTypes.DATE,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return User_Collection;
};
