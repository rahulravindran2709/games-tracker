

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addConstraint('User_Collections', ['user_id'], {
    type: 'FOREIGN KEY',
    name: 'reference_user',
    references: { // Required field
      table: 'Users',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  }),    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */


  down: (queryInterface, Sequelize) => queryInterface.removeConstraint('User_Collections', 'reference_user'),
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

};
