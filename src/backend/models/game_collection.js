
module.exports = (sequelize, DataTypes) => {
  const GameCollection = sequelize.define('Game_Collection');
  GameCollection.associate = (models) => {
    GameCollection.hasMany(models.Timesheet, { foreignKey: 'gameCollectionId' })
  }
  return GameCollection;
};
