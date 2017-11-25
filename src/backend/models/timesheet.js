
module.exports = (sequelize, DataTypes) => {
  const Timesheet = sequelize.define('Timesheet', {
    timesheetIn: DataTypes.DATE,
    timesheetOut: DataTypes.DATE,
    gameCollectionId: DataTypes.INTEGER,
  });
  Timesheet.associate = (models) => {
    Timesheet.belongsTo(models.Game_Collection);
  };

  return Timesheet;
};
