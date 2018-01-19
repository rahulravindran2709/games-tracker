
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    service_game_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    service_createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    service_updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    summary: {
      type: DataTypes.TEXT,
    },
    storyline: {
      type: DataTypes.TEXT,
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
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    publishers: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    genres: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    pegi: {
      type: DataTypes.INTEGER,
    },
    esrb: {
      type: DataTypes.INTEGER,
    },
    steamAppId: {
      type: DataTypes.STRING,
    },
    timeToBeat: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    relatedGames: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
  });
  Game.associate = (models) => {
    Game.belongsToMany(models.Collection, { through: models.Game_Collection, foreignKey: 'game_id' });
    Game.belongsToMany(models.Wishlist, { through: models.Game_Wishlist, foreignKey: 'game_id' });
    Game.hasMany(models.Game_Images, { foreignKey: 'game_id', sourceKey: 'id' });
    Game.hasMany(models.Game_Links, { foreignKey: 'game_id', sourceKey: 'id' });
  };
  return Game;
};
