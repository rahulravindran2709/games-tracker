
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    collection_name: DataTypes.STRING,
  });
  Collection.associate = function (models) {
    Collection.belongsToMany(models.User, { through: models.User_Collection, foreignKey: 'collection_id' });
    Collection.belongsToMany(models.Game, { through: models.Game_Collection, foreignKey: 'collection_id' });
  };
  return Collection;
};
