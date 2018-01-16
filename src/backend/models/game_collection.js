
module.exports = (sequelize, DataTypes) => {
  const GameCollection = sequelize.define('Game_Collection', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    collection_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    game_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    playthroughs: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  GameCollection.associate = (models) => {
    GameCollection.hasMany(models.Timesheet, { foreignKey: 'gameCollectionId', sourceKey: 'id' });
  };
  return GameCollection;
};
