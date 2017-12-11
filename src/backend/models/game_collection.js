
module.exports = (sequelize, DataTypes) => {
  const GameCollection = sequelize.define('Game_Collection', {
    playthroughs: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  GameCollection.associate = (models) => {
    GameCollection.hasMany(models.Timesheet, { foreignKey: 'gameCollectionId' });
  };
  return GameCollection;
};
