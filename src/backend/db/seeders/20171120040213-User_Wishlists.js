module.exports = {
  up: (queryInterface, Sequelize) =>
    // Some code to get the collection id and user id using queryInterface
     queryInterface.bulkInsert('User_Wishlists', [{
       wishlist_id: 1,
       user_id: 1,
       createdAt: new Date(),
       updatedAt: new Date(),
     }, {
       wishlist_id: 2,
       user_id: 1,
       createdAt: new Date(),
       updatedAt: new Date(),
     }, {
       wishlist_id: 3,
       user_id: 1,
       createdAt: new Date(),
       updatedAt: new Date(),
     }]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('User_Wishlists', null, {}),
};
