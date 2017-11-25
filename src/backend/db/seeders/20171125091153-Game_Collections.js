

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Game_Collections', [{
    collection_id: 1,
    game_id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    collection_id: 1,
    game_id: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    collection_id: 1,
    game_id: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Game_Wishlists', null, {}),
};
