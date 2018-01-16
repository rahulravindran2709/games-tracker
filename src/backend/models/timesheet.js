
module.exports = (sequelize, DataTypes) => {
  const Timesheet = sequelize.define('Timesheet', {
    timesheetIn: DataTypes.DATE,
    timesheetOut: DataTypes.DATE,
    gameCollectionId: DataTypes.INTEGER,
    timeTaken: DataTypes.BIGINT,
  });
  Timesheet.associate = (models) => {
    // Timesheet.belongsTo(models.Game_Collection, { foreignKey: 'gameCollectionId' });
  };

  return Timesheet;
};
