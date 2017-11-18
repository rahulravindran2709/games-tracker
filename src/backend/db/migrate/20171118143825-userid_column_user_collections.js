

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('User_Collections', 'user_id', {
    type: Sequelize.INTEGER,
  }),    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */


  down: (queryInterface, Sequelize) => queryInterface.removeColumn('User_Collections', 'user_id')
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  ,
};
