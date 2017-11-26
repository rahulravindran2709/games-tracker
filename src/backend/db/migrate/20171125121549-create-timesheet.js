
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Timesheets', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    timesheetIn: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    timesheetOut: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    gameCollectionId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Timesheets'),
};
