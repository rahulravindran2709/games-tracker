
module.exports = (sequelize, DataTypes) => {
  const GameWishlist = sequelize.define('Game_Wishlist', {
    wishlist_id: DataTypes.NUMBER,
  });
  return GameWishlist;
};
