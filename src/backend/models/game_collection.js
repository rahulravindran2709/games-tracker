
module.exports = (sequelize, DataTypes) => {
  const GameCollection = sequelize.define('Game_Collection');
  GameCollection.associate = (models) => {
    GameCollection.hasMany(models.Timesheet, { as: 'GameEntry' })
  }
  return GameCollection;
};
