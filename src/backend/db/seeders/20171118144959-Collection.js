

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
  }]),    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */


  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Collections', null, {}),
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

};
