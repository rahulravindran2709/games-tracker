module.exports = {
  up: (queryInterface, Sequelize) =>
    // Some code to get the collection id and user id using queryInterface
     queryInterface.bulkInsert('User_Collections', [{
       collection_id: 1,
       user_id: 1,
       createdAt: new Date(),
       updatedAt: new Date(),
     }, {
       collection_id: 2,
       user_id: 1,
       createdAt: new Date(),
       updatedAt: new Date(),
     }, {
       collection_id: 3,
       user_id: 1,
       createdAt: new Date(),
       updatedAt: new Date(),
     }]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('User_Collections', null, {}),
};
