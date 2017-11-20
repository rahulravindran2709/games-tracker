
module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define('Wishlist', {
    wishlist_name: DataTypes.STRING,
  });
  Wishlist.associate = function (models) {
    Wishlist.belongsToMany(models.User, { through: models.User_Wishlist });
  };
  return Wishlist;
};
