

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Wishlists', [{
    wishlist_name: 'Test Wishlist1',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    wishlist_name: 'Test Wishlist2',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    wishlist_name: 'Test Wishlist3',
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Wishlists', null, {}),
};
