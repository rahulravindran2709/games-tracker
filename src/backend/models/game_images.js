
module.exports = (sequelize, DataTypes) => {
  const GameImages = sequelize.define('Game_Images', {
    image_type: DataTypes.STRING,
    width: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    url: DataTypes.BLOB,
  });
  return GameImages;
};
