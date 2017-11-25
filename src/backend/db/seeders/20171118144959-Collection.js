

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Collections', [{
    collection_name: 'Test Collection1',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    collection_name: 'Test Collection2',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    collection_name: 'Test Collection3',
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Collections', null, {}),
};
