
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    collection_name: DataTypes.STRING,
  });
  Collection.associate = function (models) {
    Collection.belongsToMany(models.User, { through: models.User_Collection });
  };
  return Collection;
};
