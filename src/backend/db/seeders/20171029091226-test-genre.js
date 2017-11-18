

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Genres', [
    { genre_id: 2,
      name: 'Point-and-click',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    { genre_id: 4,
      name: 'Fighting',
      createdAt: new Date(),
      updatedAt: new Date() },
    { genre_id: 5,
      name: 'Shooter',
      createdAt: new Date(),
      updatedAt: new Date() },
    { genre_id: 7,
      name: 'Music',
      createdAt: new Date(),
      updatedAt: new Date() },
    { genre_id: 8,
      name: 'Platform',
      createdAt: new Date(),
      updatedAt: new Date() },
    { genre_id: 9,
      name: 'Puzzle',
      createdAt: new Date(),
      updatedAt: new Date() },
    { genre_id: 10,
      name: 'Racing',
      createdAt: new Date(),
      updatedAt: new Date() },
    { genre_id: 11,
      name: 'Real Time Strategy (RTS)',
      createdAt: new Date(),
      updatedAt: new Date() },
    { genre_id: 12,
      name: 'Role-playing (RPG)',
      createdAt: new Date(),
      updatedAt: new Date() },
    { genre_id: 13,
      name: 'Simulator',
      createdAt: new Date(),
      updatedAt: new Date() },
  ], {}),    /*
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
