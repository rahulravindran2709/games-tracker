module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Timesheets', [{
    timesheetIn: new Date(),
    timesheetOut: new Date(),
    gameCollectionId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    timesheetIn: new Date(),
    timesheetOut: new Date(),
    gameCollectionId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    timesheetIn: new Date(),
    timesheetOut: new Date(),
    gameCollectionId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Timesheets', null, {}),
};
