
module.exports = (sequelize, DataTypes) => {
  const GameImages = sequelize.define('Game_Images', {
    image_type: {
      type: DataTypes.STRING,
    },
    width: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.INTEGER,
    },
    url: {
      type: DataTypes.STRING,
    },
  });
  return GameImages;
};
