

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Pegi_ratings', [{
    pegi_rating_id: 1,
    rating: '3',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    pegi_rating_id: 2,
    rating: '7',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    pegi_rating_id: 3,
    rating: '12',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    pegi_rating_id: 4,
    rating: '16',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    pegi_rating_id: 5,
    rating: '18',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Pegi_ratings', null, {}),
};
