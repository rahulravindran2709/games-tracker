
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    game_id: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
    name: {
      type: DataTypes.STRING,
    },
    game_createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    game_updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    summary: {
      type: DataTypes.STRING,
    },
    storyline: {
      type: DataTypes.STRING,
    },
    firstReleaseDate: {
      type: DataTypes.DATE,
    },
  });
  Game.associate = (models) => {
    Game.belongsToMany(models.Collection, { through: models.Collection_Game, foreignKey: 'game_id' });
  };
  return Game;
};
