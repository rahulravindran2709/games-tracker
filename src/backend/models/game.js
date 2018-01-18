
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    game_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
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
    rating: {
      type: DataTypes.DOUBLE,
    },
    ratingCount: {
      type: DataTypes.INTEGER,
    },
    developers: {
      type: DataTypes.ARRAY,
    },
    publishers: {
      type: DataTypes.ARRAY,
    },
    genres: {
      type: DataTypes.ARRAY,
    },
    platforms: {
      type: DataTypes.ARRAY,
    },
  });
  Game.associate = (models) => {
    Game.belongsToMany(models.Collection, { through: models.Game_Collection, foreignKey: 'game_id' });
    Game.belongsToMany(models.Wishlist, { through: models.Game_Wishlist, foreignKey: 'game_id' });
    Game.hasMany(models.Game_Images, { foreignKey: 'game_id', sourceKey: 'id' });
  };
  return Game;
};
