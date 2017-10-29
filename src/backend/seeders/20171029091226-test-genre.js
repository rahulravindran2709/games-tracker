

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Genres', [{
    name: 'Action',
    genre_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'Adventure',
    genre_id: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */


  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Genres', null, {}),
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

};
