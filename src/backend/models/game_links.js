
module.exports = (sequelize, DataTypes) => {
  const GameLinks = sequelize.define('Game_Links', {
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
    },
  });
  return GameLinks;
};
