
module.exports = (sequelize, DataTypes) => {
  const GameCollection = sequelize.define('Game_Collection', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
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
      defaultValue: 0,
    },
  });
  GameCollection.associate = (models) => {
    GameCollection.hasMany(models.Timesheet, { foreignKey: 'gameCollectionId', sourceKey: 'id' });
    GameCollection.belongsTo(models.Game, { foreignKey: 'game_id' });
    GameCollection.belongsTo(models.Collection, { foreignKey: 'collection_id' });
  };
  return GameCollection;
};
